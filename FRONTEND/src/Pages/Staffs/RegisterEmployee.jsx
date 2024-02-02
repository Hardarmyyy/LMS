import React from 'react'
import RegistrationForm from '../../Components/RegistrationForm'
import UseRegisterEmployee from '../../Hooks/Staffs/UseRegisterEmployee'

const RegisterEmployee = () => {

const {user, error, handleChange, handleRegisterEmployee} = UseRegisterEmployee()

const submitRegisterEmployee = async (e) =>  {
    e.preventDefault()
    await handleRegisterEmployee()
}

return (

<>
    <RegistrationForm
        status={{}} 
        user={user}
        error={error}
        handleChange={handleChange}
        handleRegister={submitRegisterEmployee}
    >
    </RegistrationForm>
</>

)
}

export default RegisterEmployee