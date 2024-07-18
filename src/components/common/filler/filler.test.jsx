import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Filler from './filler';

// Mock MUI components
vi.mock('@mui/material', () => ({
  Box: ({ children, ...props }) => <div data-testid="box" {...props}>{children}</div>,
  Typography: ({ children, ...props }) => <div data-testid="typography" {...props}>{children}</div>,
  Button: ({ children, ...props }) => <button data-testid="button" {...props}>{children}</button>,
}));

test('Filler renders correctly', () => {
  render(<Filler />);
  
  expect(screen.getByText('25% Off')).toBeDefined();
  expect(screen.getByText('On all orders above $299')).toBeDefined();
  expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeDefined();
  expect(screen.getByText('GRAB THIS OFFER')).toBeDefined();
});
