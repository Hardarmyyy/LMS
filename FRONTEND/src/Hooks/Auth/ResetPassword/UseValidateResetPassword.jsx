import React from 'react'
import { useState, useEffect } from "react";

const UseValidateResetPassword = (value) => {

    const [errors, setError] = useState({})

    const passwordRegexUpperCase = /^(?=.*[A-Z])[a-zA-Z0-9.!@#$%^&*]{8,}$/;
    const passwordRegexNumber = /^(?=.*[0-9])[a-zA-Z0-9.!@#$%^&*]{8,}$/;
    const passwordRegexSymbol = /^(?=.*[.!@#$%^&*])[a-zA-Z0-9.!@#$%^&*]{8,}$/;


    const validate = (value) => {
        const newErrors = {};

        for (const field in value) {
            if (field === 'password' && value[field].trim() === '') {
                newErrors[field] = 'Password field is required';
            }
            else if (field === 'password' && value[field].trim() !== '' && value[field].length < 8 ) {
                newErrors[field] = 'Password must be at least 8 characters';
            }
            else if ((field === 'password' && value[field].trim() !== '') && !(passwordRegexUpperCase.test(value[field]))) {
                newErrors[field] = 'Password must contain at least one uppercased letter!';
            }
            else if ((field === 'password' && value[field].trim() !== '') && !(passwordRegexNumber.test(value[field]))) {
                newErrors[field] = 'Password must contain at least one number!';
            }
            else if ((field === 'password' && value[field].trim() !== '') && !(passwordRegexSymbol.test(value[field]))) {
                newErrors[field] = 'Password must contain at least one symbol!';
            }
            else if (field === 'confirmPassword' && value[field].trim() === '') {
                newErrors[field] = 'Confirm password field is required';
            }
        }

        setError(newErrors)
    }

    useEffect(() => {
        validate(value)
    }, [value]) 


    return {errors}
}

export default UseValidateResetPassword