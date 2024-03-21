import React, { useState } from 'react';
import '../styles/Signup.scss';
import AlertBanner from '../components/AlertBanner';
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import { validateEmail, validatePassword } from '../utils/validate';
import {
    invalidEmailErrorMessage,
    invalidPasswordErrorMessage,
    passwordsNotMatchingErrorMessage,
    successMessage
} from "../utils/constants";

interface formValues {
    username: string;
    password: string;
    confirmPassword: string;
    error: string;
    successMessage: string;
}

const initialFormValues: formValues = {
    username: '',
    password: '',
    confirmPassword: '',
    error: '',
    successMessage: '',
};

const Signup: React.FC = () => {
    const [values, setValues] = useState<formValues>(initialFormValues);

    // TODO: might need the debounce
    const handleChange = (name: string, value: string) => {
        setValues({ ...values, [name]: value.trim() });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateEmail(values.username)) {
            setValues({ ...values, successMessage: '', error: invalidEmailErrorMessage });
            return;
        }

        if (!validatePassword(values.password)) {
            setValues({ ...values, successMessage: '', error: invalidPasswordErrorMessage });
            return;
        }

        if (values.password !== values.confirmPassword) {
            setValues({ ...values, successMessage: '', error: passwordsNotMatchingErrorMessage });
            return;
        }

        setValues({ ...values, error: '', successMessage });
    };

    return (
        <div data-testid="signup" className="signup">
            <form onSubmit={handleSubmit}>
                <div className="input-box-container">
                    <InputBox
                        id="username"
                        type="email"
                        label="Username (Email)"
                        value={values.username}
                        onChange={(e) => handleChange('username', e.target.value)}
                    />
                    <InputBox
                        id="password"
                        type="password"
                        label="Password"
                        value={values.password}
                        onChange={(e) => handleChange('password', e.target.value)}
                    />
                    <InputBox
                        id="confirmPassword"
                        type="password"
                        label="Confirm Password"
                        value={values.confirmPassword}
                        onChange={(e) => handleChange('confirmPassword', e.target.value)}
                    />
                </div>
                {values.error && <AlertBanner message={values.error} type="error" />}
                {values.successMessage && <AlertBanner message={values.successMessage} type="success" />}
                <Button
                    type="submit"
                    disabled={!values.username || !values.password || !values.confirmPassword}
                >
                    Sign Up
                </Button>
            </form>
        </div>
    );
};

export default Signup;
