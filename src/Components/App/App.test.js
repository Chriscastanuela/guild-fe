import App from './App';
import '@testing-library/jest-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import { render, screen } from '@testing-library/react';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
