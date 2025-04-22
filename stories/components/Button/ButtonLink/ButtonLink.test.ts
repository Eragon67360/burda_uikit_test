import { expect, Mock, userEvent } from '@storybook/test';
import { within } from '@testing-library/dom';
import { PlayFunction, Renderer } from 'storybook/internal/types';
import { ButtonLinkArgs } from './ButtonLink';

export const play: PlayFunction<Renderer, ButtonLinkArgs> = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement);
  const link = canvas.getByRole('link');

  await expect(link).toHaveAccessibleName(args.label);

  await userEvent.tab();
  if (args.disabled) {
    await expect(link).not.toHaveFocus();
  } else {
    await expect(link).toHaveFocus();
  }
  (args.onClick as Mock).mockClear();

  const checkIfClicked = async (shouldBeClicked: boolean) => {
    if (args.disabled) {
      await expect(args.onClick).not.toHaveBeenCalled();
    } else {
      if (shouldBeClicked) {
        await expect(args.onClick).toHaveBeenCalled();
      } else {
        await expect(args.onClick).not.toHaveBeenCalled();
      }
    }
    (args.onClick as Mock).mockClear();
  };

  await userEvent.keyboard('[Enter]');
  await checkIfClicked(true);

  await userEvent.keyboard('[Space]');
  await checkIfClicked(false);

  if (!args.disabled) {
    await userEvent.click(link);
    await checkIfClicked(true);
  }
  await userEvent.tab();
};
