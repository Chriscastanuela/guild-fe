import ExistingUsers from './ExistingUsers';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react';

describe('ExistingUsers', () => {
    
    it('', () => {
        render(<Router><ExistingUsers/></Router>);
        expect(screen.getByText('')).toBeInTheDocument();
    })
})