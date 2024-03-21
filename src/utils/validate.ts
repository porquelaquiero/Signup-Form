export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
};

export const validatePassword = (password: string): boolean => {
    const capitalLetterRegex = /[A-Z]/;
    const numericCharacterRegex = /[0-9]/;
    const specialCharacterRegex = /[!@#$%^&*]/;

    return (
        capitalLetterRegex.test(password) &&
        numericCharacterRegex.test(password) &&
        specialCharacterRegex.test(password)
    );
};
