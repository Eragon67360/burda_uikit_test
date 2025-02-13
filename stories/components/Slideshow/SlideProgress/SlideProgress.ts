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
}

export const createSlideProgress = ({
    totalSteps,
    duration,
    isPlaying = true,
    onPlayPauseClick = () => { },
    onStepComplete = () => { },
}: SlideProgressArgs): HTMLElement => {

    const state: ProgressState = {
        currentStep: 0,
        isPlaying,
    };

    const updatePlayPauseButton = (button: HTMLButtonElement): void => {
        const iconKey = state.isPlaying ? 'pause' : 'play';
        button.innerHTML = IconRegistry[IconCategory.SLIDER][iconKey];
    };

    const startProgressAnimation = (progressElement: HTMLElement): void => {
        requestAnimationFrame(() => {
            progressElement.style.width = '0%';
            progressElement.style.transition = 'none';

            void progressElement.offsetWidth;

            progressElement.style.transition = `width ${duration}s linear`;
            progressElement.style.width = '100%';
        });
    };

    const createProgressSection = (index: number): HTMLElement => {
        const section = document.createElement('div');
        section.className = 'flex-1 h-2 bg-neutral-100 rounded overflow-hidden';

        if (index === state.currentStep) {
            const progress = document.createElement('div');
            progress.className = 'h-full bg-secondary-interaction';

            if (state.isPlaying) {
                section.appendChild(progress);
                startProgressAnimation(progress);

                const handleTransitionEnd = (): void => {
                    progress.removeEventListener('transitionend', handleTransitionEnd);

                    state.currentStep = (state.currentStep + 1) % totalSteps;
                    onStepComplete();
                    renderProgressSections();
                };

                progress.addEventListener('transitionend', handleTransitionEnd);
            } else {
                section.appendChild(progress);
            }
        } else if (index < state.currentStep) {
            const completedProgress = document.createElement('div');
            completedProgress.className = 'h-full bg-base-black';
            completedProgress.style.width = '100%';
            section.appendChild(completedProgress);
        }

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
        'hover:bg-secondary-extra-light',
        'transition-colors duration-200'
    ].join(' ');

    renderProgressSections();
    updatePlayPauseButton(playPauseButton);

    playPauseButton.addEventListener('click', () => {
        state.isPlaying = !state.isPlaying;
        updatePlayPauseButton(playPauseButton);
        onPlayPauseClick();
        renderProgressSections();
    });

    container.appendChild(progressContainer);
    container.appendChild(playPauseButton);

    return container;
};
