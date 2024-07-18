import { expect, test, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from './form';

// Mock MUI components
vi.mock('@mui/material', () => ({
  Grid: ({ children, ...props }) => <div data-testid="grid" {...props}>{children}</div>,
  Typography: ({ children, ...props }) => <div data-testid="typography" {...props}>{children}</div>,
  TextField: ({ ...props }) => <input data-testid={`text-field-${props.name}`} {...props} />,
  Button: ({ children, ...props }) => <button data-testid="button" {...props}>{children}</button>,
}));

test('ContactForm renders correctly', () => {
  render(<ContactForm />);
  
  expect(screen.getByText('Got Questions?')).toBeDefined();
  expect(screen.getByTestId('text-field-name')).toBeDefined();
  expect(screen.getByTestId('text-field-email')).toBeDefined();
  expect(screen.getByTestId('text-field-subject')).toBeDefined();
  expect(screen.getByTestId('text-field-message')).toBeDefined();
  expect(screen.getByText('SEND')).toBeDefined();
});