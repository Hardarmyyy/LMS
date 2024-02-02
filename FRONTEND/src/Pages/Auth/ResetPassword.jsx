import React from 'react'
import ResetPasswordForm from '../../Components/Auth/ResetPassword/ResetPasswordForm'
import UseResetPassword from '../../Hooks/Auth/ResetPassword/UseResetPassword'
import Aside from '../../Layout/Aside/Aside'

const ResetPassword = () => {

const {user, error, handleChange, handleResetPassword, showPassword, handleShowPassword, showConfirmPassword, handleShowConfirmPassword} = UseResetPassword()

const handleSubmitResetPassword = (e) => {
    e.preventDefault()
    handleResetPassword()
}

return (
    <>
        <ResetPasswordForm
            user={user} 
            error={error}
            handleChange={handleChange}
            handleResetPassword={handleSubmitResetPassword}
            showPassword={showPassword}
            handleShowPassword={handleShowPassword}
            showConfirmPassword={showConfirmPassword} 
            handleShowConfirmPassword={handleShowConfirmPassword}
        >
        </ResetPasswordForm>

        <Aside></Aside>
    </>
)
}

export default ResetPassword