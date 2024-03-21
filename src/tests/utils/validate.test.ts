import { validateEmail, validatePassword } from '../../utils/validate';

describe('validateEmail', () => {
    it('should return true for a valid email address', () => {
        const validEmail = 'test@example.com';
        expect(validateEmail(validEmail)).toBe(true);
    });

    it('should return false for an invalid email address', () => {
        const invalidEmail = 'invalidemail.com';
        expect(validateEmail(invalidEmail)).toBe(false);
    });
});

describe('validatePassword', () => {
    it('should return true for a valid password', () => {
        const validPassword = 'Password123!';
        expect(validatePassword(validPassword)).toBe(true);
    });

    it('should return false for an invalid password without a capital letter', () => {
        const invalidPassword = 'password123!';
        expect(validatePassword(invalidPassword)).toBe(false);
    });

    it('should return false for an invalid password without a numeric character', () => {
        const invalidPassword = 'Password!';
        expect(validatePassword(invalidPassword)).toBe(false);
    });

    it('should return false for an invalid password without a special character', () => {
        const invalidPassword = 'Password123';
        expect(validatePassword(invalidPassword)).toBe(false);
    });

    it('should return false for an invalid password without meeting all criteria', () => {
        const invalidPassword = 'pass';
        expect(validatePassword(invalidPassword)).toBe(false);
    });
});