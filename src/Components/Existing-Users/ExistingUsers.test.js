import ExistingUsers from './ExistingUsers';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

let courses = {
    courses: [
        {id: "aaa", name: "English", time: "03/29/21"},
        {id: "aab", name: "History", time: "03/30/21"},
        {id: "aac", name: "Science", time: "03/31/21"},
        {id: "aad", name: "Art", time: "03/32/21"}
    ]
}

let login = jest.fn();
let getSpecificStudent = jest.fn();

describe('ExistingUsers', () => {
    
    describe('Unit', () => {
        it('should render the header, input, and button', () => {
            render(<Router><ExistingUsers coursesAvailable={courses}/></Router>);
            expect(screen.getByText('Login')).toBeInTheDocument();
            expect(screen.getByText('Submit')).toBeInTheDocument();
            expect(screen.getByPlaceholderText('ID')).toBeInTheDocument();
        })
        it('should render the available courses', () => {
            render(<Router><ExistingUsers coursesAvailable={courses}/></Router>);
            expect(screen.getByText('Available Courses')).toBeInTheDocument();
            expect(screen.getByText('ID: aaa')).toBeInTheDocument();
            expect(screen.getByText('Name: English')).toBeInTheDocument();
            expect(screen.getByText('Time: 03/29/21')).toBeInTheDocument();
        })
    })
    describe('Integration', () => {
        it('should try to get the student that has been typed into the input', () => {
            render(
                <Router>
                    <ExistingUsers 
                    coursesAvailable={courses} 
                    getSpecificStudent={getSpecificStudent} 
                    postCourse={login}
                    />
                </Router>
            );
            userEvent.type(screen.getByPlaceholderText('ID'), 'aaa');
            userEvent.click(screen.getByText('Submit'));
            expect(getSpecificStudent).toHaveBeenCalledWith('aaa');
        })
        it('should go to the course registration page after a studentId is passed down as a prop', () => {
            render(
                <Router>
                    <ExistingUsers 
                    coursesAvailable={courses} 
                    getSpecificStudent={getSpecificStudent} 
                    postCourse={login}
                    student={'aaa'}
                    />
                </Router>
            );
            expect(screen.getByText('Sign up for a Class, !')).toBeInTheDocument();
        })
        it('should post a course', () => {
            render(
                <Router>
                    <ExistingUsers 
                    coursesAvailable={courses} 
                    getSpecificStudent={getSpecificStudent} 
                    postCourse={login}
                    student={'aaa'}
                    />
                </Router>
            );
            userEvent.type(screen.getByPlaceholderText('ID'), 'aaa');
            userEvent.click(screen.getByText('Submit'));
            expect(login).toHaveBeenCalledWith('aaa');
        })
    })
})