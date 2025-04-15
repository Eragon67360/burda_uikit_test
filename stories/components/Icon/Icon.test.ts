import { expect } from '@storybook/test';
import { PlayFunction, Renderer } from 'storybook/internal/types';
import { IconArgs } from './Icon';

export const play: PlayFunction<Renderer, IconArgs> = async ({ canvasElement, args }) => {
  const icon = canvasElement.firstChild as HTMLElement;

  await expect(icon).toBeInTheDocument();

  if (!icon) return;

  if (args.role) {
    await expect(icon).toHaveRole(args.role);
  }

  if (args.ariaLabel) {
    await expect(icon).toHaveAccessibleName(args.ariaLabel);
    await expect(icon).toHaveAttribute('aria-label', args.ariaLabel);
  }

  if (args.focusable && !args.ariaHidden) {
    await expect(icon).toHaveAttribute('focusable', 'true');
    await expect(icon).toHaveAttribute('tabindex', '0');
  } else {
    await expect(icon).toHaveAttribute('focusable', 'false');
    await expect(icon).toHaveAttribute('tabindex', '-1');
  }

  if (args.ariaHidden) {
    await expect(icon).toHaveAttribute('aria-hidden', 'true');
  } else {
    await expect(icon).not.toHaveAttribute('aria-hidden');
  }
};
