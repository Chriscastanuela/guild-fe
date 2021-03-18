import NewUsers from './NewUsers';
import '@testing-library/jest-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

let postStudent = jest.fn()

describe('NewUsers', () => {
    
    describe('Unit', () => {
        it('renders the registration box', () => {
            render(<Router><NewUsers/></Router>);
            expect(screen.getByText('Register Here')).toBeInTheDocument();
            expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument();
            expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument();
            expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
            expect(screen.getByText('Submit')).toBeInTheDocument();
        })
    })

    describe('Integration', () => {
        it('displays the postStudentResponse message that has been passed down from App', () => {
            render(<Router><NewUsers postStudentResponse={'Registered Chris'}/></Router>);
            expect(screen.getByText('Registered Chris')).toBeInTheDocument();
        })
        it('calls the postStudent method when the button is clicked', () => {
            render(<Router><NewUsers postStudent={postStudent}/></Router>);
            userEvent.click(screen.getByText('Submit'));
            expect(postStudent).toHaveBeenCalled();
        })
    })
})