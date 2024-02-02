import React from 'react'
import { useState, useEffect } from "react";

const UseValidateRegisterEmployee = (value) => {

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const [errors, setError] = useState({})

    const validate = (value) => {
        const newErrors = {};

        for (const field in value) {
            if (field === 'firstName' && value[field].trim() === '') {
                newErrors[field] = 'First name is required';
            }
            else if (field === 'middleName' && value[field].trim() === '') {
                newErrors[field] = 'Middle name is required';
            }
            else if (field === 'lastName' && value[field].trim() === '') {
                newErrors[field] = 'Last name is required';
            }
            else if (field === 'dob' && value[field].trim() === '') {
                newErrors[field] = 'Date of birth is required';
            }
            else if (field === 'age' && value[field].trim() === '') {
                newErrors[field] = 'Age is required';
            }
            else if (field === 'gender' && value[field].trim() === '') {
                newErrors[field] = 'Gender is required';
            }
            else if (field === 'origin' && value[field].trim() === '') {
                newErrors[field] = 'State of origin is required';
            }
            else if (field === 'lga' && value[field].trim() === '') {
                newErrors[field] = 'L.G.A is required';
            }
            else if (field === 'phoneNumber' && value[field].trim() === '') {
                newErrors[field] = 'Phone number is required';
            }
            else if (field === 'email' && value[field].trim() === '') {
                newErrors[field] = 'Email address is required';
            }
            else if ((field === 'email' && value[field].trim() !== '') && !(emailRegex.test(value[field].trim()))) {
                newErrors[field] = 'Enter a valid email address';
            }
            else if (field === 'address' && value[field].trim() === '') {
                newErrors[field] = 'Address is required';
            }
        }

        setError(newErrors)
    }

    useEffect(() => {
        validate(value)
    }, [value])  

    return {errors}

}

export default UseValidateRegisterEmployee