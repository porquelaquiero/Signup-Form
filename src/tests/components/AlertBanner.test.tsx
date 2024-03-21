import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AlertBanner from '../../components/AlertBanner';

describe('AlertBanner', () => {
    describe('should render AlertBanner with correct message and type', () => {
        it('should render error type AlertBanner', () => {
            const message = 'This is an error message';
            const type = 'error';

            render(<AlertBanner message={message} type={type} />);

            const alertBanner = screen.getByTestId('alert-banner');
            expect(alertBanner).toBeInTheDocument();
            expect(alertBanner).toHaveClass('alert-banner', type);

            const messageElement = screen.getByText(message);
            expect(messageElement).toBeInTheDocument();
        })

        it('should render success type AlertBanner', () => {
            const message = 'Sign up successful!';
            const type = 'success';

            render(<AlertBanner message={message} type={type} />);

            const alertBanner = screen.getByTestId('alert-banner');
            expect(alertBanner).toBeInTheDocument();
            expect(alertBanner).toHaveClass('alert-banner', type);

            const messageElement = screen.getByText(message);
            expect(messageElement).toBeInTheDocument();
        })
    });
});
