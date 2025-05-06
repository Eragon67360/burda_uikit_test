/**
 * @interface SlideProgressArgs
 * @description Configuration options for creating a slide progress component
 */
export type SlideProgressArgs = {
  /**
   * Total number of steps/slides to display
   * @required
   */
  totalSteps: number;

  /**
   * Duration in seconds for each step/slide
   * @required
   */
  duration: number;

  /**
   * Initial playing state of the progress
   * @default true
   */
  isPlaying?: boolean;

  /**
   * Initial active step index
   * @default 0
   */
  currentStep?: number;

  /**
   * Callback fired when play/pause button is clicked
   */
  onPlayPauseClick?: () => void;

  /**
   * Callback fired when a step completes its progress
   */
  onStepComplete?: () => void;

  /**
   * Callback fired when a step is clicked
   * @param {number} index - The index of the clicked step
   */
  onStepClick?: (index: number) => void;

  /**
   * Initial progress width percentage
   * @default 0
   */
  initialProgressWidth?: number;

  /**
   * Initial remaining time in milliseconds
   * @default duration * 1000
   */
  initialRemainingTime?: number;
};

/**
 * @interface ProgressState
 * @description Internal state management for the progress component
 * @private
 */
export interface ProgressState {
  currentStep: number;
  isPlaying: boolean;
  progressWidth: number;
  startTime: number | null;
  remainingTime: number;
}

/**
 * @interface SlideProgressReturn
 * @description Return type for the createSlideProgress function
 */
export interface SlideProgressReturn {
  /** The created DOM element */
  element: HTMLElement;
  /** Cleanup function to cancel animations */
  cleanup: () => void;
  /** Get current progress width percentage */
  getProgressWidth: () => number;
}
