import React from 'react'
import { useState, useEffect } from 'react'
import UseValidateRegisterEmployee from './UseValidateRegisterEmployee'

const UseRegisterEmployee = () => {

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // define state to manage form object data
    const [user, setUser] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        dob: '',
        age: '',
        gender: '',
        origin: '',
        lga: '',
        phoneNumber: '',
        otherPhoneNumber: '',
        email: '',
        address: ''
    })

    const [error, setError] = useState({})

    const [isSubmitting, setIsSubmitting] = useState(false);

    // define a function to handle form state
    const handleChange = (e) => {
        const {name, value} = e.target;

        setUser((user) => {return {...user, [name]: 
                                                name === 'address' 
                                                    ? value 
                                                        : name === 'dob' 
                                                            ? value.replace(/[^0-9]/g, '') 
                                                                : name === 'age' 
                                                                    ? value.replace(/[^0-9]/g, '') 
                                                                        : name === 'phoneNumber'
                                                                            ? value.replace(/[^0-9]/g, '') 
                                                                                : name === 'otherPhoneNumber' 
                                                                                    ? value.replace(/[^0-9]/g, '') 
                                                                                        : value.replace(/\s/g, "")}})
        // validating form state;
        if (name === 'firstName') {
            setError((error) => {return {...error, firstName: value ? '': 'Kindly enter first name' }})
        }
        if (name === 'middleName') {
            setError((error) => {return {...error, middleName: value ? '': 'Kindly enter middle name' }})
        }
        if (name === 'lastName') {
            setError((error) => {return {...error, lastName: value ? '': 'Kindly enter last name' }})
        }
        if (name === 'dob') {
            setError((error) => {return {...error, dob: value ? '': 'Kindly enter date of birth' }})
        }
        if (name === 'age') {
            setError((error) => {return {...error, age: value ? '': 'Kindly enter age' }})
        }
        if (name === 'gender') {
            setError((error) => {return {...error, gender: value ? '': 'Kindly choose gender' }})
        }
        if (name === 'origin') {
            setError((error) => {return {...error, origin: value ? '': 'Kindly select state of origin' }})
        }
        if (name === 'lga') {
            setError((error) => {return {...error, lga: value ? '': 'Kindly choose L.G.A' }})
        }
        if (name === 'phoneNumber') {
            setError((error) => {return {...error, phoneNumber: value ? '': 'Kindly enter phone number' }})
        }
        if (name === 'otherPhoneNumber') {
            setError((error) => {return {...error, otherPhoneNumber: value ? '': 'Kindly enter other phone number' }})
        }
        if (name === 'email') {
            setError((error) => {return {...error, email: value ? !emailRegex.test(value) ? 'Enter a valid email address' : '' : 'Kindly enter email address' }})
        }
        if (name === 'address') {
            setError((error) => {return {...error, address: value ? '': 'Kindly enter address' }})
        }
    } 

    // UseValidateRegisterEmployee hook to catch errors on the form object;
    const {errors} = UseValidateRegisterEmployee(user)

    // define a function to check that all fields in the form object are not empty
    const handleCanRegister = (value) => {
        const canRegister = [
            value.firstName && 
            value.middleName && 
            value.lastName &&
            value.dob &&
            value.age &&
            value.gender &&
            value.origin &&
            value.lga &&
            value.phoneNumber &&
            value.email &&
            emailRegex.test(value.email) &&
            value.address 
        ].every(Boolean)

        return canRegister
    }

    const isRegister = handleCanRegister(user)

    // define a function to dispatch the register employee request
    const handleRegisterEmployee = async () => {

        setError(errors)

        if (isSubmitting) return; // Don't submit the form if it's already submitting

        if(!isSubmitting && isRegister) {
            setIsSubmitting(true); 
            console.log(user)
            setUser({
                firstName: '',
                middleName: '',
                lastName: '',
                dob: '',
                age: '',
                gender: '',
                origin: '',
                lga: '',
                phoneNumber: '',
                otherPhoneNumber: '',
                email: '',
                address: ''
            })
            setIsSubmitting(false); // Re-enable the signup button on error
        }
    }

    useEffect(() => {
        handleCanRegister(user)
    }, [user])

    return {user, error, handleChange, handleRegisterEmployee}
}

export default UseRegisterEmployee