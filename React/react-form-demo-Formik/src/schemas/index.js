import * as yup from 'yup';

const passRegex =
    /"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$"/;

export const basicSchema = yup.object().shape({
    email: yup.string().email('Please enter a valid email!').required('Required'),
    password: yup
        .string()
        .matches(passRegex, { message: 'Please fix your damn pass!' })
        .required('Required'),
});
