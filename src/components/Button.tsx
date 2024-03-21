import React from 'react';
import '../styles/Button.scss';

interface ButtonProps {
    type: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    onClick?: () => void;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
   type,
   disabled = false,
   onClick,
   children,
}) => (
    <button
        className='button'
        type={type}
        disabled={disabled}
        onClick={onClick}
    >
        {children}
    </button>
);

export default Button;
