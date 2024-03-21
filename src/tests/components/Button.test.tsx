import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Button from '../../components/Button';

describe('Button', () => {
    const user = userEvent.setup();

    it('should render button with provided children', () => {
        render(<Button type="button">Click me</Button>);

        const buttonElement = screen.getByText('Click me') as HTMLButtonElement;
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement.tagName).toBe('BUTTON');
    });

    it('should call onClick callback when button is clicked', async () => {
        const onClick = jest.fn();

        render(<Button type="button" onClick={onClick}>Click me</Button>);

        const buttonElement = screen.getByText('Click me') as HTMLButtonElement;
        await user.click(buttonElement);
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('should disable the button when disabled prop is true', () => {
        render(<Button type="button" disabled>Click me</Button>);

        const buttonElement = screen.getByText('Click me') as HTMLButtonElement;
        expect(buttonElement.disabled).toBe(true);
    });

    it('should not call onClick callback when button is disabled', async () => {
        const onClick = jest.fn();

        render(<Button type="button" disabled onClick={onClick}>Click me</Button>);

        const buttonElement = screen.getByText('Click me') as HTMLButtonElement;
        await user.click(buttonElement);
        expect(onClick).not.toHaveBeenCalled();
    });
});
