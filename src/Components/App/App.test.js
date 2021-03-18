import App from './App';
import '@testing-library/jest-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import { render, screen } from '@testing-library/react';

describe('App', () => {
  it('renders the header and buttons', () => {
    render(<Router><App /></Router>);
    expect(screen.getByText('School Registration')).toBeInTheDocument();
    expect(screen.getByText('Existing Users')).toBeInTheDocument();
    expect(screen.getByText('New Users')).toBeInTheDocument();
  });
})