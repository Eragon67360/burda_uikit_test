import { expect, userEvent } from '@storybook/test';
import { within } from '@testing-library/dom';
import { PlayFunction, Renderer } from 'storybook/internal/types';
import { RadioGroupArgs } from './RadioGroup';

export const play: PlayFunction<Renderer, RadioGroupArgs> = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement);
  const radioGroup = canvas.getByRole('group', { name: args.fieldLabel });
  const radioButtons = canvas.getAllByRole('radio');
  await expect(radioGroup).toBeVisible();

  await expect(radioGroup).toHaveAttribute('id', args.id);

  if (args.fieldLabel) {
    await expect(radioGroup).toHaveAccessibleName(args.fieldLabel);
  }

  for (const radioButton of radioButtons) {
    await expect(radioButton).toBeVisible();
    await expect(radioButton).toHaveAttribute('type', 'radio');
    await expect(radioButton).toHaveAttribute('name', args.name);
  }

  await userEvent.tab();

  if (!args.selectedValue) {
    for (const radioButton of radioButtons) {
      if (args.disabled) {
        await expect(radioButton).not.toHaveFocus();
      } else {
        await expect(radioButton).toHaveFocus();
        await userEvent.keyboard('[ArrowDown]');
      }
    }

    for (const radioButton of radioButtons) {
      await userEvent.click(radioButton);
      if (args.disabled) {
        await expect(radioButton).toBeDisabled();
      } else {
        await expect(radioButton).toBeChecked();
      }
    }
  }
};
