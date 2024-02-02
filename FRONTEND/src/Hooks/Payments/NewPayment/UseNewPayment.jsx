import React from 'react'
import { useState, useEffect } from 'react'
import UseValidateNewPayment from './UseValidateNewPayment'

const UseNewPayment = () => {

    // define state to manage form object data
    const [newPayment, setNewPayment] = useState({
        session: '',
        term: '',
        class: '',
        name: '',
        studentId: '',
        purpose: '',
        amount: '',
        discount: ''
    })

    const [error, setError] = useState({})

    const [isSubmitting, setIsSubmitting] = useState(false);

    // define a function to handle form state
    const handleChange = (e) => {
        const {name, value} = e.target;

        setNewPayment((newPayment) => {return {...newPayment, [name]: 
                                                    name === 'class' 
                                                        ? value 
                                                            : name === 'name' 
                                                                ? value 
                                                                    : name === 'session' 
                                                                        ? value.replace(/[^0-9]/g, '') 
                                                                            : name === 'amount' 
                                                                                ? value.replace(/[^0-9]/g, '') 
                                                                                    : name === 'discount' 
                                                                                        ? value.replace(/[^0-9]/g, '') 
                                                                                            : value.replace(/\s/g, "")}})
        // validating form state;
        if (name === 'session') {
            setError((error) => {return {...error, session: value ? '' : 'Kindly choose session' }})
        }
        if (name === 'term') {
            setError((error) => {return {...error, term: value ? '': 'Kindly choose term' }})
        }
        if (name === 'class') {
            setError((error) => {return {...error, class: value ? '': 'Kindly select class' }})
        }
        if (name === 'name') {
            setError((error) => {return {...error, name: value ? '': 'Kindly enter student name' }})
        }
        if (name === 'studentId') {
            setError((error) => {return {...error, studentId: value ? '': 'Invalid student Id' }})
        }
        if (name === 'purpose') {
            setError((error) => {return {...error, purpose: value ? '': 'Kindly specify purpose of payment' }})
        }
        if (name === 'amount') {
            setError((error) => {return {...error, amount: value ? value <= 0 ? 'Amount must be greater than 0' : '' : 'Kindly enter amount' }})
        }
        if (name === 'discount') {
            setNewPayment((newPayment) => { return {...newPayment, amount: newPayment.discount > 0 ? newPayment.amount - ((newPayment.discount / 100) * newPayment.amount) : newPayment.amount}})
            setError((error) => {return {...error, discount: value ? value <= 0 ? 'Discount must be greater than 0' : '' : 'Kindly enter discount' }})
        }
    } 

    // UseValidateNewPayment hook to catch errors on the form object;
    const {errors} = UseValidateNewPayment(newPayment)

    // define a function to check that all fields in the form object are not empty
    const handlePayment = (value) => {
        const canMakePayment = [
            value.session && 
            value.term && 
            value.class &&
            value.name &&
            value.studentId &&
            value.purpose &&
            value.amount &&
            value.amount > 0
        ].every(Boolean)

        return canMakePayment
    }

    const isMakePayment = handlePayment(newPayment)

    // define a function to dispatch the makePayment request
    const handleMakePayment = async () => {

        setError(errors)

        if (isSubmitting) return; // Don't submit the form if it's already submitting

        if(!isSubmitting && isMakePayment) {
            setIsSubmitting(true); 
            console.log(newPayment)
            setNewPayment({
                session: '',
                term: '',
                class: '',
                name: '',
                studentId: '',
                purpose: '',
                amount: '',
                discount: ''
            })
            setIsSubmitting(false); // Re-enable the signup button on error
        }
    }

    useEffect(() => {
        handlePayment(newPayment)
    }, [newPayment])

    return {newPayment, error, handleChange, handleMakePayment}

}

export default UseNewPayment