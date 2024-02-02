import React from 'react'
import { useState, useEffect } from "react";

const UseValidateNewPayment = (value) => {

    const [errors, setError] = useState({})

    const validate = (value) => {
        const newErrors = {};

        for (const field in value) {
            if (field === 'session' && value[field].trim() === '') {
                newErrors[field] = 'Session field is required';
            }
            else if (field === 'term' && value[field].trim() === '') {
                newErrors[field] = 'Term field is required';
            }
            else if (field === 'class' && value[field].trim() === '') {
                newErrors[field] = 'Student class is required';
            }
            else if (field === 'name' && value[field].trim() === '') {
                newErrors[field] = 'Student name is required';
            }
            else if (field === 'studentId' && value[field].trim() === '') {
                newErrors[field] = 'Student Id is required';
            }
            else if (field === 'purpose' && value[field].trim() === '') {
                newErrors[field] = 'Payment For field is required';
            }
            else if (field === 'amount' && Number(value[field]) <= 0) {
                newErrors[field] = 'Amount must be greater than 0';
            }
        }

        setError(newErrors)
    }

    useEffect(() => {
        validate(value)
    }, [value])  

    return {errors}

}

export default UseValidateNewPayment