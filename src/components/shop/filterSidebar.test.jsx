import { expect, test, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import FilterSidebar from './filterSidebar';

// Mock MUI components
vi.mock('@mui/material', () => ({
  Drawer: ({ children, ...props }) => <div data-testid="drawer" {...props}>{children}</div>,
  Typography: ({ children, ...props }) => <div data-testid="typography" {...props}>{children}</div>,
  Slider: ({ ...props }) => <div data-testid="slider" {...props} />,
  Button: ({ children, ...props }) => <button data-testid="button" {...props}>{children}</button>,
  List: ({ children, ...props }) => <ul data-testid="list" {...props}>{children}</ul>,
  ListItem: ({ children, ...props }) => <li data-testid="list-item" {...props}>{children}</li>,
  ListItemText: ({ primary, ...props }) => <span data-testid="list-item-text" {...props}>{primary}</span>,
  Box: ({ children, ...props }) => <div data-testid="box" {...props}>{children}</div>,
}));

const mockProps = {
  open: true,
  onClose: vi.fn(),
  categories: ['Category 1', 'Category 2'],
  onFilterPrice: vi.fn(),
  onFilterCategory: vi.fn(),
};

test('FilterSidebar renders correctly', () => {
  render(<FilterSidebar {...mockProps} />);
  
  expect(screen.getByText('Filter by Price')).toBeDefined();
  expect(screen.getByText('Product Categories')).toBeDefined();
  expect(screen.getByText('Category 1')).toBeDefined();
  expect(screen.getByText('Category 2')).toBeDefined();
});

