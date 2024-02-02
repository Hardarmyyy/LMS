import React from 'react'
import GenerateBillForm from '../../Components/Payments/GenerateBillForm'
import UseGenerateBill from '../../Hooks/Payments/GenerateBill/UseGenerateBill'

const GenerateBill = () => {

const {bill, error, handleChange, handleGenerateBill} = UseGenerateBill()

const handleSubmitGenerateBill = async (e) => {
    e.preventDefault()
    await handleGenerateBill()
}

return (
    <>
        <GenerateBillForm
            status={{}} 
            bill={bill}
            error={error}
            handleChange={handleChange}
            handleGenerateBill={handleSubmitGenerateBill}
        >
        </GenerateBillForm>
    </>
)
}

export default GenerateBill