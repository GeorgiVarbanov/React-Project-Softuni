import { useState } from "react";

export default function useForm(submitHandler, initialValues) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    }

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(Object.keys(values))

        const valueKeys = Object.keys(values);
        const validationErrors = {}

        valueKeys.forEach(key => {
            if (!values[key].trim()) {
                validationErrors[key] = `${key} is required`;
            } else {
                switch (key) {
                    case 'email':
                        if (!/\S+@\S+\.\S+/.test(values[key])) {
                            validationErrors[key] = `Invalid ${key}`;
                        }
                        break;
                    case 'password':
                        if (values[key].length < 6) {
                            validationErrors[key] = `${key} should be at least 6 characters`;
                        }
                        break;
                    case 'rePass':
                        if (values.password !== values.rePass) {
                            validationErrors[key] = `Password mismatch`;
                        }
                        break;
                    default:
                        break;
                }
            }
        });

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            submitHandler(values);
        }
    }

    return {
        values,
        errors,
        onChange,
        onSubmit,
    }
};