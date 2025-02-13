// SlideProgress.ts
import { IconCategory, IconRegistry } from "../../../assets/icons";

export type SlideProgressArgs = {
    totalSteps: number;
    duration: number;
    isPlaying?: boolean;
    onPlayPauseClick?: () => void;
    onStepComplete?: () => void;
};

interface ProgressState {
    currentStep: number;
    isPlaying: boolean;
    progressWidth: number;
    startTime: number | null;
}
interface SlideProgressReturn {
    element: HTMLElement;
    cleanup: () => void;
}
export const createSlideProgress = ({
    totalSteps,
    duration,
    isPlaying = true,
    onPlayPauseClick = () => { },
    onStepComplete = () => { },
}: SlideProgressArgs): SlideProgressReturn => {

    const state: ProgressState = {
        currentStep: 0,
        isPlaying,
        progressWidth: 0,
        startTime: null
    };

    let animationFrameId: number;

    const updatePlayPauseButton = (button: HTMLButtonElement): void => {
        const iconKey = state.isPlaying ? 'pause' : 'play';
        button.innerHTML = IconRegistry[IconCategory.SLIDER][iconKey];
    };

    const updateProgress = (progressElement: HTMLElement, timestamp: number): void => {
        if (!state.startTime) {
            state.startTime = timestamp;
            progressElement.style.width = '0%';
        }
        if (!state.isPlaying) return;

        const elapsed = timestamp - state.startTime;
        const progress = Math.min((elapsed / (duration * 1000)) * 100, 100);

        progressElement.style.width = `${progress}%`;
        state.progressWidth = progress;

        if (progress < 100) {
            animationFrameId = requestAnimationFrame((time) => updateProgress(progressElement, time));
        } else {
            // Handle completion
            handleStepCompletion();
        }
    };
    const handleStepCompletion = (): void => {
        cancelAnimationFrame(animationFrameId);
        state.startTime = null;
        state.progressWidth = 0;
        state.currentStep = (state.currentStep + 1) % totalSteps;
        onStepComplete();

        setTimeout(() => {
            renderProgressSections();
        }, 0);
    };

    const startProgressAnimation = (progressElement: HTMLElement): void => {
        cancelAnimationFrame(animationFrameId);
        state.startTime = null;
        state.progressWidth = 0;
        progressElement.style.width = '0%';

        if (state.isPlaying) {
            requestAnimationFrame(() => {
                requestAnimationFrame((timestamp) => updateProgress(progressElement, timestamp));
            });
        }
    };

    const createProgressSection = (index: number): HTMLElement => {
        const section = document.createElement('div');
        section.className = 'flex-1 h-2 bg-neutral-100 z-0 rounded overflow-hidden cursor-pointer hover:bg-secondary-dark hover:z-[999] transition-colors duration-300';

        if (index === state.currentStep) {
            const progress = document.createElement('div');
            progress.className = `h-full ${state.isPlaying ? 'bg-secondary-interaction' : 'bg-neutral-500'}`;
            section.appendChild(progress);

            if (state.isPlaying) {
                setTimeout(() => {
                    startProgressAnimation(progress);
                }, 0);
            } else {
                progress.style.width = `${state.progressWidth}%`;
            }
        } else if (index < state.currentStep) {
            const completedProgress = document.createElement('div');
            completedProgress.className = `h-full bg-base-black hover:bg-secondary-dark transition-all duration-300`;
            completedProgress.style.width = '100%';
            section.appendChild(completedProgress);
        }

        section.addEventListener('click', () => {
            cancelAnimationFrame(animationFrameId);
            state.currentStep = index;
            state.progressWidth = 0;
            state.startTime = null;
            renderProgressSections();
        });

        return section;
    };

    const renderProgressSections = (): void => {
        progressContainer.innerHTML = '';
        Array.from({ length: totalSteps }).forEach((_, index) => {
            progressContainer.appendChild(createProgressSection(index));
        });
    };

    const container = document.createElement('div');
    container.className = 'flex items-center gap-3 w-[22.75rem] max-w-[22.75rem]';

    const progressContainer = document.createElement('div');
    progressContainer.className = 'flex-1 flex gap-2 p-2 rounded-[0.5rem] bg-base-white';

    const playPauseButton = document.createElement('button');
    playPauseButton.className = [
        'w-8 h-8 cursor-pointer',
        'flex items-center justify-center',
        'rounded-full bg-base-white',
        'hover:bg-secondary-extra-light active:bg-secondary-light',
        'transition-colors duration-300'
    ].join(' ');

    renderProgressSections();
    updatePlayPauseButton(playPauseButton);

    playPauseButton.addEventListener('click', () => {
        state.isPlaying = !state.isPlaying;
        updatePlayPauseButton(playPauseButton);
        onPlayPauseClick();

        const currentProgress = progressContainer.children[state.currentStep].querySelector('div');
        if (currentProgress) {
            currentProgress.className = `h-full transition duration-300 ${state.isPlaying ? 'bg-secondary-interaction' : 'bg-neutral-500'}`;

            if (state.isPlaying) {
                requestAnimationFrame((timestamp) => {
                    state.startTime = timestamp - (state.progressWidth / 100) * (duration * 1000);
                    updateProgress(currentProgress, timestamp);
                });
            }
        }
    });

    container.appendChild(progressContainer);
    container.appendChild(playPauseButton);
    const cleanup = () => {
        cancelAnimationFrame(animationFrameId);
    };
    return {
        element: container,
        cleanup
    };
};
