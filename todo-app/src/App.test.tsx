import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock fetch to avoid network calls in tests
const mockFetch = jest.fn();
global.fetch = mockFetch;

beforeEach(() => {
  mockFetch.mockResolvedValue({
    ok: true,
    json: () => Promise.resolve([
      { id: 1, name: '田中' },
      { id: 2, name: '佐藤' },
      { id: 3, name: '鈴木' }
    ]),
  });
});

test('renders todo app title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Todoアプリ/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders kanban columns', () => {
  render(<App />);
  expect(screen.getByText('TODO')).toBeInTheDocument();
  expect(screen.getByText('進行中')).toBeInTheDocument();
  expect(screen.getByText('完了')).toBeInTheDocument();
});

test('renders input form elements', () => {
  render(<App />);
  expect(screen.getByPlaceholderText('やることを入力')).toBeInTheDocument();
  expect(screen.getByText('担当者を選択:')).toBeInTheDocument();
  expect(screen.getByText('追加')).toBeInTheDocument();
});
