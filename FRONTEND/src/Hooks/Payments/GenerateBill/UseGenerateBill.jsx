import React from 'react'
import { useState, useEffect } from 'react'
import UseValidateGenerateBill from './UseValidateGenerateBill'

const UseGenerateBill = () => {

    // define state to manage form object data
    const [bill, setBill] = useState({
        session: '',
        term: '',
        class: '',
        purpose: '',
        amount: ''
    })

    const [error, setError] = useState({})

    const [isSubmitting, setIsSubmitting] = useState(false);

    // define a function to handle form state
    const handleChange = (e) => {
        const {name, value} = e.target;

        setBill((bill) => {return {...bill, [name]: 
                                                    name === 'class' 
                                                        ? value 
                                                            : name === 'session' 
                                                                ? value.replace(/[^0-9]/g, '') 
                                                                    : name === 'amount' 
                                                                        ? value.replace(/[^0-9]/g, '') 
                                                                            : value.replace(/\s/g, "")}})
        // validating form state;
        if (name === 'session') {
            setError((error) => {return {...error, session: value ? '' : 'Kindly enter session' }})
        }
        if (name === 'term') {
            setError((error) => {return {...error, term: value ? '': 'Kindly enter term' }})
        }
        if (name === 'class') {
            setError((error) => {return {...error, class: value ? '': 'Kindly enter class' }})
        }
        if (name === 'purpose') {
            setError((error) => {return {...error, purpose: value ? '': 'Kindly specify purpose of payment' }})
        }
        if (name === 'amount') {
            setError((error) => {return {...error, amount: value ? value <= 0 ? 'Amount must be greater than 0' : '' : 'Kindly enter amount' }})
        }
        
    } 

    // UseValidateGenerateBill hook to catch errors on the form object;
    const {errors} = UseValidateGenerateBill(bill)

    // define a function to check that all fields in the form object are not empty
    const handleBill = (value) => {
        const canGenerateBill = [
            value.session && 
            value.term && 
            value.class &&
            value.purpose &&
            value.amount &&
            value.amount > 0
        ].every(Boolean)

        return canGenerateBill
    }

    const isGenerateBill = handleBill(bill)

    // define a function to dispatch the generateBill request
    const handleGenerateBill = async () => {

        setError(errors)

        if (isSubmitting) return; // Don't submit the form if it's already submitting

        if(!isSubmitting && isGenerateBill) {
            setIsSubmitting(true); 
            console.log(bill)
            setBill({
                session: '',
                term: '',
                class: '',
                purpose: '',
                amount: ''
            })
            setIsSubmitting(false); // Re-enable the signup button on error
        }
    }

    useEffect(() => {
        handleBill(bill)
    }, [bill])

    return {bill, error, handleChange, handleGenerateBill}
}

export default UseGenerateBill