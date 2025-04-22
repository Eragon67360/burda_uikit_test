import { expect, userEvent } from '@storybook/test';
import { within } from '@testing-library/dom';
import { PlayFunction, Renderer } from 'storybook/internal/types';
import { InputArgs } from './Input';

export const play: PlayFunction<Renderer, InputArgs> = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement);
  const input = canvas.getByRole('textbox');

  if (args.variant === 'input') {
    await expect(input).toHaveAttribute('type', args.type || 'text');
  }
  await expect(input).toHaveAccessibleName(args.label);

  if (args.state === 'tooltip') {
    await userEvent.tab();
    const tooltipTrigger = canvas.getByRole('button');
    await expect(tooltipTrigger).toBeVisible();
    await expect(tooltipTrigger).toHaveFocus();

    await userEvent.click(tooltipTrigger);
    await new Promise((resolve) => setTimeout(resolve, 100));
    await expect(canvas.getByRole('tooltip')).toBeVisible();
    await userEvent.click(tooltipTrigger);

    await userEvent.keyboard('[Space]');
    await new Promise((resolve) => setTimeout(resolve, 100));
    await expect(canvas.getByRole('tooltip')).toBeVisible();
    await userEvent.keyboard('[Space]');

    await userEvent.keyboard('[Enter]');
    await new Promise((resolve) => setTimeout(resolve, 100));
    await expect(canvas.getByRole('tooltip')).toBeVisible();
    await userEvent.keyboard('[Enter]');
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  await userEvent.tab();
  if (args.disabled) {
    await expect(input).not.toHaveFocus();
  } else {
    await expect(input).toHaveFocus();
    if (!args.value) {
      await userEvent.type(input, 'Test input');
      await expect(input).toHaveValue('Test input');
      await userEvent.clear(input);
    }
  }

  if (args.required) {
    await expect(input).toHaveAttribute('required');
    await expect(input).toHaveAttribute('aria-required', 'true');
  }
  if (args.ariaLabel) {
    await expect(input).toHaveAttribute('aria-label', args.ariaLabel);
  }
  if (args.autocomplete) {
    await expect(input).toHaveAttribute('autocomplete', args.autocomplete);
  }
  if (args.state === 'error' && args.errorMessage) {
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await expect(input).toHaveAttribute('aria-describedby', `${args.id}-error`);
  }

  if (args.state === 'error' && args.errorMessage) {
    const errorMessage = canvas.getByText(args.errorMessage);
    await expect(errorMessage).toBeVisible();
  }
};
