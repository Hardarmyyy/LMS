import React from 'react'
import { useState, useEffect } from 'react'
import UseValidateSchoolForm from './UseValidateSchoolForm'

const UseRegisterSchool = () => {

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const [school, setSchool] = useState({
        name: '',
        address: '',
        email: '',
        plan: ''
    })
    
    const [error, setError] = useState({})

    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setSchool((school) => {return {...school, [name]: name === 'email' ? value.replace(/\s/g, "") : value}})
    
        if (name === 'name') {
            setError((error) => { return {...error, name: value ? '' : 'Enter school name'}})
        }
        else if (name === 'address') {
            setError((error) => { return {...error, address: value ? '' : 'Enter school address'}})
        }
        else if (name === 'email') {
            setError((error) => { return {...error, email: value ? emailRegex.test(value) ? '' : 'Enter a valid email address' : 'Enter email address'}})
        }
        else if (name === 'plan') {
            setError((error) => { return {...error, plan: value ? '' : 'Choose a plan'}})
        }
    } 
    
    const handleCanRegister = (value) => {
        const canRegister = [
            value.name &&
            value.address && 
            value.email &&
            emailRegex.test(value.email) && 
            value.plan
        ].every(Boolean) // enable the submit button 
    
        return canRegister
    }
    
    const isRegister = handleCanRegister(school)
    const {errors} = UseValidateSchoolForm(school)

    const handleRegisterSchool = () => {

        setError(errors)

        if (isSubmitting) return;

        if (!isSubmitting && isRegister) {
            setIsSubmitting(true)
            console.log(school)
            setSchool({
                name: '',
                address: '',
                email: '',
                plan: ''
            })
            setIsSubmitting(false)
        }
    }
    

    useEffect(() => {
        handleCanRegister(school)
    }, [school])

    return {school, error, handleChange, handleRegisterSchool}

}

export default UseRegisterSchool