import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Signup from '../../pages/Signup';

describe('Signup', () => {
    const user = userEvent.setup();

    let usernameLabel: HTMLElement,
        passwordLabel: HTMLElement,
        confirmPasswordLabel: HTMLElement,
        usernameInput: HTMLElement,
        passwordInput: HTMLElement,
        confirmPasswordInput: HTMLElement,
        submitButton: HTMLElement;

    beforeEach(() => {
        render(<Signup />);

        usernameLabel = screen.getByText('Username (Email)');
        passwordLabel = screen.getByText('Password');
        confirmPasswordLabel = screen.getByText('Confirm Password');
        usernameInput = screen.getByLabelText('Username (Email)');
        passwordInput = screen.getByLabelText('Password');
        confirmPasswordInput = screen.getByLabelText('Confirm Password');
        submitButton = screen.getByRole('button', { name: 'Sign Up' });
    });

    describe('Form Field Render', () => {
        it('should render form', () => {
            expect(usernameLabel).toBeInTheDocument();
            expect(passwordLabel).toBeInTheDocument();
            expect(confirmPasswordLabel).toBeInTheDocument();
            expect(usernameInput).toBeInTheDocument();
            expect(usernameInput).toHaveAttribute('type', 'email');
            expect(passwordInput).toBeInTheDocument();
            expect(passwordInput).toHaveAttribute('type', 'password');
            expect(confirmPasswordInput).toBeInTheDocument();
            expect(confirmPasswordInput).toHaveAttribute('type', 'password');
            expect(submitButton).toBeInTheDocument();
            expect(submitButton).toHaveAttribute('type', 'submit');
        })
    })

    describe('Conditional Disabled State of Sign Up Button', () => {
        it('sign up button should not be disabled when all of inputs are filled', async () => {
            await user.type(usernameInput, 'test@test.com');
            await user.type(passwordInput, 'Pw123!');
            await user.type(confirmPasswordInput, 'Pw123!');
            expect(submitButton).not.toHaveAttribute('disabled');
        })

        it('sign up button should be disabled for the empty usernameInput', async () => {
            await user.type(passwordInput, 'Pw123!');
            await user.type(confirmPasswordInput, 'Pw123!');
            expect(submitButton).toHaveAttribute('disabled');
        })

        it('sign up button should be disabled for the empty passwordInput', async () => {
            await user.type(usernameInput, 'test@test.com');
            await user.type(confirmPasswordInput, 'Pw123!');
            expect(submitButton).toHaveAttribute('disabled');
        })

        it('sign up button should be disabled for the empty confirmPasswordInput', async () => {
            await user.type(usernameInput, 'test@test.com');
            await user.type(passwordInput, 'Pw123!');
            expect(submitButton).toHaveAttribute('disabled');
        })

        it('sign up button should be disabled for the usernameInput with spaces', async () => {
            await user.type(usernameInput, '   ');
            await user.type(passwordInput, 'Pw123!');
            await user.type(confirmPasswordInput, 'Pw123!');
            expect(submitButton).toHaveAttribute('disabled');
        });
    })

    describe('Form Field Validation', () => {
        const invalidEmailErrorMessage = 'Please enter a valid email address';
        const invalidPasswordErrorMessage = 'Password must have at least one capital letter, one numeric character, ' +
            'and one special character';
        const passwordsNotMatchingErrorMessage = 'Passwords do not match';
        const successMessage = 'Sign up successful!';

        it('invalid email error should show when email input is not valid', async () => {
            await user.type(usernameInput, 'test@test');
            await user.type(passwordInput, 'Pw123!');
            await user.type(confirmPasswordInput, 'Pw123!');
            await user.click(submitButton);
            const message = await screen.findByText(invalidEmailErrorMessage);
            expect(message).toBeInTheDocument();
        })

        it('invalid password error message should show when password input has no capital letter', async () => {
            await user.type(usernameInput, 'test@test.com');
            await user.type(passwordInput, 'pw123!');
            await user.type(confirmPasswordInput, 'pw123!');
            await user.click(submitButton);
            const message = await screen.findByText(invalidPasswordErrorMessage);
            expect(message).toBeInTheDocument();
        })

        it('invalid password error should show when password input has no numeric character', async () => {
            await user.type(usernameInput, 'test@test.com');
            await user.type(passwordInput, 'Pw!');
            await user.type(confirmPasswordInput, 'Pw!');
            await user.click(submitButton);
            const message = await screen.findByText(invalidPasswordErrorMessage);
            expect(message).toBeInTheDocument();
        })

        it('invalid password error should show when password input has no special character', async () => {
            await user.type(usernameInput, 'test@test.com');
            await user.type(passwordInput, 'Pw123');
            await user.type(confirmPasswordInput, 'Pw123');
            await user.click(submitButton);
            const message = await screen.findByText(invalidPasswordErrorMessage);
            expect(message).toBeInTheDocument();
        })

        it('matching error should show when password and confirm password are not the same', async () => {
            await user.type(usernameInput, 'test@test.com');
            await user.type(passwordInput, 'Pw123!');
            await user.type(confirmPasswordInput, 'Pw123!!');
            await user.click(submitButton);
            const message = await screen.findByText(passwordsNotMatchingErrorMessage);
            expect(message).toBeInTheDocument();
        })

        it('successMessage should show when all inputs are valid', async () => {
            await user.type(usernameInput, 'test@test.com');
            await user.type(passwordInput, 'Pw123!');
            await user.type(confirmPasswordInput, 'Pw123!');
            await user.click(submitButton);
            const message = await screen.findByText(successMessage);
            expect(message).toBeInTheDocument();
        })
    });
});
