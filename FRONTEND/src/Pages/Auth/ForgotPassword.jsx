import React from 'react'
import ForgotPasswordForm from '../../Components/Auth/ForgotPassword/ForgotPasswordForm'
import UseForgotPassword from '../../Hooks/Auth/ForgotPassword/UseForgotPassword'
import Aside from '../../Layout/Aside/Aside'

const ForgotPassword = () => {

const {user, error, handleChange, handleForgotPassword} = UseForgotPassword()

const handleSubmitForgotPassword = (e) => {
    e.preventDefault()
    handleForgotPassword()
}

return (

    <>
        <ForgotPasswordForm
            user={user}
            error={error}
            handleChange={handleChange} 
            handleForgotPassword={handleSubmitForgotPassword}
        >
        </ForgotPasswordForm>

        <Aside></Aside>
    </>
)
}

export default ForgotPassword