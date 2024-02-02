import React from 'react'
import LoginForm from '../../Components/Auth/SignIn/LoginForm'
import { UseLogin } from '../../Hooks/Auth/Signin/UseLogin'
import Aside from '../../Layout/Aside/Aside'

const Login = () => {

const {user, error, handleChange, showPassword, handleShowPassword, handleLogin} = UseLogin()

const handleSubmitLogin = (e) => {
    e.preventDefault()
    handleLogin()
}
    
return (
    <>
        <LoginForm
            user={user}
            error={error}
            handleChange={handleChange}
            handleLoginUser={handleSubmitLogin}
            showPassword={showPassword}
            handleShowPassword={handleShowPassword}
        >
        </LoginForm>

        <Aside></Aside>
    </>
)
}

export default Login