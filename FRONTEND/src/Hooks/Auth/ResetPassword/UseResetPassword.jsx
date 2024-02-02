import { useState, useEffect } from 'react'
import UseValidateResetPassword from './UseValidateResetPassword'

const UseResetPassword = () => {

    const passwordRegexUpperCase = /^(?=.*[A-Z])[a-zA-Z0-9.!@#$%^&*]{8,}$/;
    const passwordRegexNumber = /^(?=.*[0-9])[a-zA-Z0-9.!@#$%^&*]{8,}$/;
    const passwordRegexSymbol = /^(?=.*[.!@#$%^&*])[a-zA-Z0-9.!@#$%^&*]{8,}$/;

    const [user, setUser] = useState({
        password: '',
        confirmPassword: '',
    }) 
    
    const [error, setError] = useState({})
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    // define a state to handle show password
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser((user) => {return {...user, [name]: value.replace(/\s/g, "")}})
        
        if (name === 'password') {
            setError((error) => {return {...error, password: value 
                                                                    ? value.length < 8 ? 'Password must be at least 8 characters' 
                                                                        : !passwordRegexUpperCase.test(value) ? 'Password must contain at least one uppercased letter!' 
                                                                            : !passwordRegexNumber.test(value) ? 'Password must contain at least one number!' 
                                                                                : !passwordRegexSymbol.test(value) ? 'Password must contain at least one symbol!' 
                                                                                    : '' : 'Kindly enter password' }})
        }
        if (name === 'confirmPassword') {
            setError((error) => {return {...error, confirmPassword: value ? value !== user.password ? 'Password does not match' : '' : 'Kindly confirm password' }})
        }
    }
    
    // define a function to handle show password;
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const handleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword)
    }
    
    const {errors} = UseValidateResetPassword(user)
    
    const canSubmit = (value) => {
        const isSave = [
            value.password &&
            value.confirmPassword &&
            value.password.length >= 8 &&
            passwordRegexUpperCase.test(value.password) &&
            passwordRegexNumber.test(value.password) &&
            passwordRegexSymbol.test(value.password) &&
            value.password === value.confirmPassword
        ].every(Boolean) 
        return isSave
    }
    
    const submitEmail = canSubmit(user)
    
    const handleResetPassword = async () => {
    
        setError(errors)
    
        if (isSubmitting) return; 
        
        if(submitEmail && !isSubmitting) {
            setIsSubmitting(true); // Disable the button
            console.log(user)
            setUser({
                password: '',
                confirmPassword: '',
            })
            setIsSubmitting(false); 
        }
    }
    
    useEffect(() => {
        canSubmit(user)
    }, [user])
    
    return {user, error, handleChange, handleResetPassword, showPassword, handleShowPassword, showConfirmPassword, handleShowConfirmPassword}
}

export default UseResetPassword