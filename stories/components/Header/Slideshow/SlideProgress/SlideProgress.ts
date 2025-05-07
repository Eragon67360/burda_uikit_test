// SlideProgress.ts
import { IconCategory, IconRegistry } from '@/assets/icons';
import { ProgressState, SlideProgressArgs, SlideProgressReturn } from '@/stories/types';

/**
 * Creates a slide progress component with interactive controls and automatic progression
 * @param {SlideProgressArgs} props - Configuration options for the progress component
 * @returns {SlideProgressReturn} Object containing the created element and control functions
 */
export const createSlideProgress = ({
  totalSteps,
  duration,
  isPlaying = true,
  currentStep = 0,
  onPlayPauseClick = () => {},
  onStepComplete = () => {},
  onStepClick = () => {},
  initialProgressWidth = 0,
  initialRemainingTime,
}: SlideProgressArgs): SlideProgressReturn => {
  const state: ProgressState = {
    currentStep,
    isPlaying,
    progressWidth: initialProgressWidth,
    startTime: null,
    remainingTime: initialRemainingTime ?? duration * 1000,
  };

  let animationFrameId: number;

  const updatePlayPauseButton = (button: HTMLButtonElement): void => {
    const iconKey = state.isPlaying ? 'pause' : 'play';
    button.innerHTML = IconRegistry[IconCategory.SLIDER][iconKey];
  };

  const updateProgress = (progressElement: HTMLElement, timestamp: number): void => {
    if (!state.startTime) {
      // If no start time, calculate based on existing progress
      state.startTime = timestamp - (state.progressWidth / 100) * (duration * 1000);
      progressElement.style.width = `${state.progressWidth}%`;
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

  const createProgressSection = (index: number): HTMLElement => {
    const section = document.createElement('div');
    section.className =
      'flex-1 h-1 md:h-2 bg-neutral-100 z-0 rounded overflow-hidden cursor-pointer hover:bg-secondary-dark hover:z-[999] transition-colors duration-300';

    if (index === state.currentStep) {
      const progress = document.createElement('div');
      progress.className = `h-full ${state.isPlaying ? 'bg-secondary-interaction' : 'bg-neutral-500'}`;
      section.appendChild(progress);

      // Preserve progress state when pausing
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
      onStepClick?.(index);
    });

    return section;
  };

  const startProgressAnimation = (progressElement: HTMLElement): void => {
    cancelAnimationFrame(animationFrameId);

    // Only reset if not already in progress
    if (state.progressWidth === 0) {
      state.startTime = null;
      progressElement.style.width = '0%';
    }

    if (state.isPlaying) {
      requestAnimationFrame(() => {
        requestAnimationFrame((timestamp) => updateProgress(progressElement, timestamp));
      });
    }
  };

  const renderProgressSections = (): void => {
    progressContainer.innerHTML = '';
    Array.from({ length: totalSteps }).forEach((_, index) => {
      progressContainer.appendChild(createProgressSection(index));
    });
  };

  const container = document.createElement('div');
  container.className = 'flex items-center gap-2 md:gap-3 w-[288px] md:w-[22.75rem] max-w-[22.75rem]';

  const progressContainer = document.createElement('div');
  progressContainer.className = 'flex-1 flex gap-2 p-2 rounded-[0.5rem] bg-base-white';

  const playPauseButton = document.createElement('button');
  playPauseButton.className = [
    'w-8 h-8 cursor-pointer hidden md:flex',
    'items-center justify-center',
    'rounded-full bg-base-white',
    'hover:bg-secondary-extra-light active:bg-secondary-light',
    'transition-colors duration-300',
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
    cleanup: cleanup,
    getProgressWidth: () => state.progressWidth,
  };
};
