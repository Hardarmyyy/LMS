import React from 'react'
import { useState, useEffect } from "react";

const UseValidateGenerateBill = (value) => {

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
                newErrors[field] = 'Class field is required';
            }
            else if (field === 'purpose' && value[field].trim() === '') {
                newErrors[field] = 'Payment For field is required';
            }
            else if (field === 'amount' && value[field].trim() === '') {
                newErrors[field] = 'Amount field is required';
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

export default UseValidateGenerateBill