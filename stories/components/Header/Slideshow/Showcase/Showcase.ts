// Showcase.ts
import { createSlideshowNavButton } from '@/stories/components/Header/Slideshow/Navigation/SlideNavButton';
import { createSlideProgress } from '@/stories/components/Header/Slideshow/SlideProgress/SlideProgress';

export type ShowcaseArgs = {
    isSmall: boolean;
    images: string[];
    duration?: number;
    isPlaying?: boolean;
};
interface ShowcaseReturn {
    element: HTMLElement;
    cleanup: () => void;
}

export const createShowcase = ({
    isSmall = false,
    images,
    duration = 5,
    isPlaying = true
}: ShowcaseArgs): ShowcaseReturn => {

    let progressComponent: ReturnType<typeof createSlideProgress> | null = null;
    let localIsPlaying = isPlaying;
    let isTransitioning = false;

    let animationFrameId: number | null = null;

    const state = {
        currentIndex: 0,
        isPlaying: localIsPlaying,
        duration
    };

    const container = document.createElement('div');
    container.className = 'relative w-full min-w-full mx-auto';

    const slideshowContent = document.createElement('div');

    slideshowContent.className = 'relative w-full min-w-full';
    if (isSmall) {
        slideshowContent.classList.add('aspect-[24/9]');
    } else {
        slideshowContent.classList.add('aspect-video');
    }
    const imageContainer = document.createElement('div');
    imageContainer.className = 'w-full h-full rounded-lg overflow-hidden min-w-full';

    const navigationContainer = document.createElement('div');
    navigationContainer.className = 'absolute inset-0 flex items-center justify-between px-4';

    const bottomControls = document.createElement('div');
    bottomControls.className = 'absolute bottom-6 left-1/2 -translate-x-1/2';

    const preloadImages = async () => {
        const imagePromises = images.map(src =>
            new Promise<HTMLImageElement>((resolve, reject) => {
                const img = new Image();
                img.src = src;
                img.alt = `Slide ${images.indexOf(src) + 1}`;
                img.className = `
                w-full 
                h-full
                object-fill 
                top-0 
                left-0 
                opacity-0 
                transition-opacity 
                duration-300
            `;
                img.onload = () => resolve(img);
                img.onerror = reject;
            })
        );

        return Promise.all(imagePromises);
    };

    const updateSlide = (index: number) => {
        if (isTransitioning) return;

        isTransitioning = true;
        const newImg = preloadedImages[index];

        imageContainer.innerHTML = '';
        imageContainer.appendChild(newImg);

        requestAnimationFrame(() => {
            newImg.classList.remove('opacity-0');

            setTimeout(() => {
                isTransitioning = false;
            }, 300);
        });
    };

    const advanceSlide = () => {
        if (!state.isPlaying || isTransitioning) return;

        state.currentIndex = (state.currentIndex + 1) % images.length;
        updateSlide(state.currentIndex);
        reinitializeProgress();
    };

    const reinitializeProgress = (withNextOrPrevious?: boolean) => {
        if (progressComponent) {
            progressComponent.cleanup();
            bottomControls.innerHTML = '';
        }
        initializeProgress(withNextOrPrevious);
    };

    const initializeProgress = (withNextOrPrevious?: boolean) => {
        const existingProgressWidth = withNextOrPrevious ? 0 : (progressComponent
            ? progressComponent.getProgressWidth()
            : 0);

        progressComponent = createSlideProgress({
            totalSteps: images.length,
            duration: state.duration,
            isPlaying: state.isPlaying,
            currentStep: state.currentIndex,
            initialProgressWidth: existingProgressWidth,
            onStepComplete: advanceSlide,
            onPlayPauseClick: () => {
                state.isPlaying = !state.isPlaying;
            },
            onStepClick: (index: number) => {
                state.currentIndex = index;
                updateSlide(state.currentIndex);
                reinitializeProgress();
            }
        });

        bottomControls.innerHTML = '';
        bottomControls.appendChild(progressComponent.element);
    };

    const handleNext = () => {
        state.currentIndex = (state.currentIndex + 1) % images.length;
        updateSlide(state.currentIndex);
        reinitializeProgress(true);
    };

    const handlePrevious = () => {
        state.currentIndex = (state.currentIndex - 1 + images.length) % images.length;
        updateSlide(state.currentIndex);
        reinitializeProgress(true);
    };

    const prevButton = createSlideshowNavButton({
        mode: 'previous',
        onClick: handlePrevious
    });

    const nextButton = createSlideshowNavButton({
        mode: 'next',
        onClick: handleNext
    });

    let preloadedImages: HTMLImageElement[] = [];

    const initialize = async () => {
        preloadedImages = await preloadImages();

        updateSlide(state.currentIndex);
        initializeProgress();

        navigationContainer.appendChild(prevButton);
        navigationContainer.appendChild(nextButton);

        slideshowContent.appendChild(imageContainer);
        slideshowContent.appendChild(navigationContainer);
        slideshowContent.appendChild(bottomControls);

        container.appendChild(slideshowContent);
    };

    const cleanup = () => {
        if (progressComponent) {
            progressComponent.cleanup();
            progressComponent = null;
        }

        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
    };

    // Trigger initialization
    initialize();

    return {
        element: container,
        cleanup
    };
};
