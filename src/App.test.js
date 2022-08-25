import { render, screen, configure, getByRole } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  ({
    throwSuggestions: true,
  })
})

describe('App testing', () => {
  test('renders a heading', () => {
    render(<App />);
    const header = screen.getByRole('heading', { name: 'Popular posts' }).textContent;
    expect(header).toBe('Popular posts');
  });

  
})