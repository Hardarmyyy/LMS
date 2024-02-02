import React from 'react'
import { useState, useEffect } from "react";

const UseValidateSchoolForm = (value) => {

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const [errors, setError] = useState({})

    const validate = (value) => {

        const newErrors = {};
    
        for (const field in value) {

            if (field === 'name' && value[field].trim() === '') {
                newErrors[field] = 'School name is required';
            }
            if (field === 'address' && value[field].trim() === '') {
                newErrors[field] = 'School address is required';
            }
            else if (field === 'email' && value[field].trim() === '') {
                newErrors[field] = 'Email address is required';
            }
            else if ((field === 'email' && value[field].trim() !== '') && !(emailRegex.test(value[field].trim()))) {
                newErrors[field] = 'Enter a valid email address';
            }
            else if (field === 'plan' && value[field].trim() === '') {
                newErrors[field] = 'Please choose a plan';
            }
        }
    
        setError(newErrors)
    }
    
    useEffect(() => {
        validate(value)
    }, [value]) 
    
    return {errors}

}

export default UseValidateSchoolForm