import React from 'react'
import RegSchoolForm from '../../Components/Auth/SignUp/RegSchoolForm'
import UseRegisterSchool from '../../Hooks/Auth/Signup/UseRegisterSchool'
import Aside from '../../Layout/Aside/Aside'

const SchoolSignup = () => {

const {school, error, handleChange, handleRegisterSchool} = UseRegisterSchool()

const handleSubmit = async (e) => {
    e.preventDefault()
    await handleRegisterSchool()
}

return (

    <>
        <RegSchoolForm
            subscription={{}}
            school={school}
            error={error}
            handleChange={handleChange}
            submitForm={handleSubmit}
        ></RegSchoolForm>

        <Aside></Aside>
    </>
)
}

export default SchoolSignup