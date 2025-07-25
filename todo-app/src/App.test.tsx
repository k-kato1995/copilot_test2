import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders todo app title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Todoアプリ/i);
  expect(titleElement).toBeInTheDocument();
});
