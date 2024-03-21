import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('App', () => {
    describe('Routes should work properly', () => {
        render(<App />);

        it('"/" should render Signup', () => {
            expect(screen.getByTestId("signup")).toBeInTheDocument();
        })
    });
});
