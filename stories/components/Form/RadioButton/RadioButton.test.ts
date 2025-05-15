import { expect, userEvent } from '@storybook/test';
import { within } from '@testing-library/dom';
import { PlayFunction, Renderer } from 'storybook/internal/types';
import { RadioButtonArgs } from './RadioButton';

export const play: PlayFunction<Renderer, RadioButtonArgs> = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement);
  const radioButton = canvas.getByRole('radio', { name: args.label });

  await expect(radioButton).toBeVisible();
  await expect(radioButton).toHaveAccessibleName(args.label);
  await expect(radioButton).toHaveAttribute('type', 'radio');

  await userEvent.tab();
  if (args.disabled) {
    await expect(radioButton).not.toHaveFocus();
  } else {
    await expect(radioButton).toHaveFocus();
  }

  if (args.checked) {
    await expect(radioButton).toBeChecked();
  } else {
    await expect(radioButton).not.toBeChecked();
  }

  if (args.disabled) {
    await expect(radioButton).toBeDisabled();
  } else {
    await userEvent.click(radioButton);
    await expect(radioButton).toBeChecked();
  }

  if (args.fieldLabel) {
    const fieldLabel = canvas.getByText(args.fieldLabel);
    await expect(fieldLabel).toBeVisible();
  }
  if (args.id) {
    await expect(radioButton).toHaveAttribute('id', args.id);
  }
  if (args.name) {
    await expect(radioButton).toHaveAttribute('name', args.name);
  }
  if (args.value) {
    await expect(radioButton).toHaveAttribute('value', args.value);
  }

  if (!args.checked) {
    (radioButton as HTMLInputElement).checked = false;
  }
  await userEvent.tab();
};
