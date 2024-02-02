import React from 'react'
import RegistrationForm from '../../Components/RegistrationForm'
import UseRegisterStudent from '../../Hooks/Students/UseRegisterStudent'

const RegisterStudents = () => {

const {user, error, handleChange, handleRegisterStudent} = UseRegisterStudent()

const handleSubmitRegisterStudent = async  (e) => {
    e.preventDefault()
    await handleRegisterStudent()
}

return (

<>
    <RegistrationForm
        status={{}} 
        user={user}
        error={error}
        handleChange={handleChange}
        handleRegister={handleSubmitRegisterStudent}
    >
    </RegistrationForm>
</>
)
}

export default RegisterStudents