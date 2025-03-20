// Showcase.ts
import { createSlideshowNavButton } from '@/components/Slideshow/Navigation/SlideNavButton';
import { createSlideProgress } from '@/components/Slideshow/SlideProgress/SlideProgress';

export type ShowcaseArgs = {
    images: string[];
    duration?: number;
    isPlaying?: boolean;
};
interface ShowcaseReturn {
    element: HTMLElement;
    cleanup: () => void;
}
export const createShowcase = ({
    images,
    duration = 5,
    isPlaying = true
}: ShowcaseArgs): ShowcaseReturn => {
    let currentIndex = 0;
    let progressComponent: { element: HTMLElement; cleanup: () => void } | null = null;
    let localIsPlaying = isPlaying;
    let isTransitioning = false;
    let animationFrameId: number | null = null;
    const imageRefs = new WeakSet<HTMLImageElement>();

    const container = document.createElement('div');
    container.className = 'relative w-full max-w-[48rem] mx-auto';

    const slideshowContent = document.createElement('div');
    slideshowContent.className = 'relative aspect-video w-full';

    const imageContainer = document.createElement('div');
    imageContainer.className = 'w-full h-full rounded-lg overflow-hidden';

    const navigationContainer = document.createElement('div');
    navigationContainer.className = 'absolute inset-0 flex items-center justify-between px-4';

    const bottomControls = document.createElement('div');
    bottomControls.className = 'absolute bottom-6 left-1/2 -translate-x-1/2';


    const preloadImages = () => {
        images.forEach(src => {
            const img = new Image();
            img.src = src;

            // Limit concurrent preloads
            img.loading = 'lazy';

            // Track preloaded images
            imageRefs.add(img);
        });
    };

    const updateSlide = async (index: number) => {
        if (isTransitioning) return;
        isTransitioning = true;

        const newImg = new Image();
        newImg.src = images[index];
        newImg.className = 'w-full h-full object-cover opacity-0 transition-opacity duration-300';
        newImg.alt = `Slide ${index + 1}`;
        imageRefs.add(newImg);

        // finalizationRegistry.register(newImg, newImg.src);

        await new Promise((resolve) => {
            newImg.onload = resolve;
        });

        imageContainer.innerHTML = '';
        imageContainer.appendChild(newImg);
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
        animationFrameId = requestAnimationFrame(() => {
            newImg.classList.remove('opacity-0');
            setTimeout(() => {
                isTransitioning = false;
            }, 300);
        });

    };

    const cleanup = () => {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }

        prevButton.removeEventListener('click', handlePrevious);
        nextButton.removeEventListener('click', handleNext);

        imageContainer.innerHTML = '';

        progressComponent = null;
    };

    const handleNext = () => {
        if (!localIsPlaying || isTransitioning) return;
        currentIndex = (currentIndex + 1) % images.length;
        updateSlide(currentIndex);
        reinitializeProgress();
    };

    const handlePrevious = () => {
        if (!localIsPlaying || isTransitioning) return;
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlide(currentIndex);
        reinitializeProgress();
    };

    const reinitializeProgress = () => {
        if (progressComponent) {
            progressComponent.cleanup();
        }
        initializeProgress();
    };

    const prevButton = createSlideshowNavButton({
        mode: 'previous',
        disabled: false,
        onClick: handlePrevious
    });

    const nextButton = createSlideshowNavButton({
        mode: 'next',
        disabled: false,
        onClick: handleNext
    });

    const initializeProgress = () => {
        if (progressComponent) {
            progressComponent.cleanup();
        }

        progressComponent = createSlideProgress({
            totalSteps: images.length,
            duration,
            isPlaying: localIsPlaying,
            currentStep: currentIndex,
            onStepComplete: () => {
                if (localIsPlaying) {
                    currentIndex = (currentIndex + 1) % images.length;
                    updateSlide(currentIndex);
                    reinitializeProgress();
                }
            },
            onPlayPauseClick: () => {
                localIsPlaying = !localIsPlaying;
                if (localIsPlaying) {
                    reinitializeProgress();
                }
            },
            onStepClick: (index: number) => {  // Add this handler
                currentIndex = index;
                updateSlide(currentIndex);
                reinitializeProgress();
            }
        });

        bottomControls.innerHTML = '';
        bottomControls.appendChild(progressComponent.element);
    };


    preloadImages();
    updateSlide(currentIndex);
    initializeProgress();
    prevButton.addEventListener('click', handlePrevious);
    nextButton.addEventListener('click', handleNext);

    navigationContainer.appendChild(prevButton);
    navigationContainer.appendChild(nextButton);

    slideshowContent.appendChild(imageContainer);
    slideshowContent.appendChild(navigationContainer);
    slideshowContent.appendChild(bottomControls);

    container.appendChild(slideshowContent);

    return {
        element: container,
        cleanup
    };
};
