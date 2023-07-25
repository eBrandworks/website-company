import * as Yup from 'yup';

export const registrationSchema = Yup.object({
    username: Yup.string().min(3).max(25).required('Please enter username'),
    password: Yup.string().min(6).required('Please enter the password'),
})
export const signinSchema = Yup.object({
    Username: Yup.string().min(3).max(25).required('Please enter username'),
    Password: Yup.string().min(6).required('Please enter the password'),
})