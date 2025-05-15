import { ButtonCTAArgs } from '@/stories/types';
import { expect, Mock, userEvent } from '@storybook/test';
import { within } from '@testing-library/dom';
import { PlayFunction, Renderer } from 'storybook/internal/types';

export const play: PlayFunction<Renderer, ButtonCTAArgs> = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button');

  await expect(button).toHaveAttribute('type', 'button');
  await expect(button).toHaveAccessibleName(args.label);

  await userEvent.tab();
  if (args.disabled) {
    await expect(button).not.toHaveFocus();
  } else {
    await expect(button).toHaveFocus();
  }
  (args.onClick as Mock).mockClear();

  const checkIfClicked = async () => {
    if (args.disabled) {
      await expect(args.onClick).not.toHaveBeenCalled();
    } else {
      await expect(args.onClick).toHaveBeenCalled();
    }
    (args.onClick as Mock).mockClear();
  };

  await userEvent.keyboard('[Enter]');
  await checkIfClicked();

  await userEvent.keyboard('[Space]');
  await checkIfClicked();

  await userEvent.click(button);
  await checkIfClicked();

  if (args.disabled) {
    await expect(button).toBeDisabled();
  } else {
    await expect(button).not.toBeDisabled();
  }
  await userEvent.tab();
};
