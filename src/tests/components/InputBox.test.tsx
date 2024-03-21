import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputBox from '../../components/InputBox';

describe('InputBox', () => {
    let id: string,
        type: string,
        label: string,
        value: string,
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

    beforeEach(() => {
        id = 'test-id';
        type = 'text';
        label = 'Test Label';
        value = '';
        onChange = jest.fn();

        render(
            <InputBox
                id={id}
                type={type}
                label={label}
                value={value}
                onChange={onChange}
            />
        );
    });

    it('should render input box with label and input element', () => {
        const labelElement = screen.getByText(label);
        expect(labelElement).toBeInTheDocument();

        const inputElement = screen.getByLabelText(label);
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveAttribute('type', type);
        expect(inputElement).toHaveAttribute('id', id);
    });

    it('should call onChange callback when input value changes', () => {
        const inputElement = screen.getByLabelText(label);
        const testValue = 'test value';

        fireEvent.input(inputElement, { target: { value: testValue } });

        expect(onChange).toHaveBeenCalledTimes(1);
    });
});
