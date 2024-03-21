    import React from 'react';
    import '../styles/InputBox.scss';

    interface InputBoxProps {
        id: string;
        type: string;
        label: string;
        value: string;
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    }

    const InputBox: React.FC<InputBoxProps> = ({ id, type, label, value, onChange }) => {
        return (
            <div className="input-box">
                <label htmlFor={id} className="label">{label}</label>
                <input
                    id={id}
                    type={type}
                    className="input"
                    value={value}
                    onChange={onChange}
                />
            </div>
        );
    };

    export default InputBox;
