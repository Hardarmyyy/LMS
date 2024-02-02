import { useState, useEffect } from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import UseValidateLoginform from './UseValidateLogin'



export const UseLogin = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    // define state to manage form object data
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const [error, setError] = useState({})

    const [isSubmitting, setIsSubmitting] = useState(false);

    // define a function to handle form state
    const handleChange = (e) => {
        const {name, value} = e.target;

        setUser((user) => {return {...user, [name]: value.replace(/\s/g, "")}})
        // validating form state;
        if (name === 'username') {
            setError((error) => {return {...error, username: value ? '': 'Kindly enter username' }})
        }
        if (name === 'password') {
            setError((error) => {return {...error, password: value ? '': 'Kindly enter password' }})
        }
    } 

    // define a state to handle show password
    const [showPassword, setShowPassword] = useState(false)

    // define a function to handle show password;
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    //UseValidateLoginForm hook to catch errors on the form object;
    const {errors} = UseValidateLoginform(user)

    // define a function to check that all fields in the form object are not empty
    const handleCanLogin = (value) => {
        const canLogin = [
            value.username && 
            value.password
        ].every(Boolean)

        return canLogin
    }

    const isLogin = handleCanLogin(user)


    // define a function to dispatch the LOGIN request
    const handleLogin = async () => {

        setError(errors)

        if (isSubmitting) return; // Don't submit the form if it's already submitting

        if(!isSubmitting && isLogin) {
            setIsSubmitting(true); 
            console.log(user)
            setUser({
                username: '',
                password: ''
            })
            setIsSubmitting(false); // Re-enable the signup button on error
        }
    }

    useEffect(() => {
        handleCanLogin(user)
    }, [user])

    return {user, error, handleChange, showPassword, handleShowPassword, handleLogin}
}
