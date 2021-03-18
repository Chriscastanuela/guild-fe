import NewUsers from './NewUsers';
import '@testing-library/jest-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import { render, screen } from '@testing-library/react';

describe('NewUsers', () => {
    
    it('', () => {
        render(<Router><NewUsers/></Router>);
        expect(screen.getByText('')).toBeInTheDocument();
    })
})