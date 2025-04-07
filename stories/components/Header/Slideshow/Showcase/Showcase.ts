// Showcase.ts
import { createSlideshowNavButton } from '@/stories/components/Header/Slideshow/Navigation/SlideNavButton';
import { createSlideProgress } from '@/stories/components/Header/Slideshow/SlideProgress/SlideProgress';

export type ShowcaseArgs = {
    isSmall: boolean;
    images: {
        mobile: string;
        tablet: string;
        desktop: string;
    }[];
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
    container.className = 'relative w-full min-w-full mx-auto overflow-hidden';

    const slideshowContent = document.createElement('div');

    slideshowContent.className = `relative w-full min-w-full ${isSmall ? 'h-full' : 'h-screen'}`;
    if (isSmall) {
        slideshowContent.classList.add('aspect-[24/9]');
    } else {
        slideshowContent.classList.add('aspect-video');
    }

    const imageContainer = document.createElement('div');
    imageContainer.className = `w-full h-full ${isSmall ? 'rounded-lg' : 'rounded-none'}  overflow-hidden min-w-full`;

    const navigationContainer = document.createElement('div');
    navigationContainer.className = 'absolute inset-0 flex items-center justify-between px-4';

    const bottomControls = document.createElement('div');
    bottomControls.className = 'absolute bottom-6 left-1/2 -translate-x-1/2';

    const preloadImages = async () => {
        const imagePromises = images.map(imageSources =>
            new Promise<HTMLPictureElement>((resolve, reject) => {
                const picture = document.createElement('picture');

                // Create source elements for responsive images
                const sourceMobile = document.createElement('source');
                sourceMobile.srcset = imageSources.mobile;
                sourceMobile.media = '(max-width: 767px)';

                const sourceTablet = document.createElement('source');
                sourceTablet.srcset = imageSources.tablet;
                sourceTablet.media = '(min-width: 768px) and (max-width: 1023px)';

                // Desktop image as fallback (mandatory)
                const img = new Image();
                img.src = imageSources.desktop;
                img.alt = `Slide ${images.indexOf(imageSources) + 1}`;
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

                // Append sources and img to picture
                picture.appendChild(sourceMobile);
                picture.appendChild(sourceTablet);
                picture.appendChild(img);

                img.onload = () => resolve(picture);
                img.onerror = reject;
            })
        );

        return Promise.all(imagePromises);
    };

    const updateSlide = (index: number) => {
        if (isTransitioning) return;

        isTransitioning = true;
        const newPicture = preloadedImages[index];

        imageContainer.innerHTML = '';
        imageContainer.appendChild(newPicture);

        // Get the actual img element within the picture
        const newImg = newPicture.querySelector('img');

        requestAnimationFrame(() => {
            newImg?.classList.remove('opacity-0');

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

    let preloadedImages: HTMLPictureElement[] = [];

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
