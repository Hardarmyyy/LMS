import React from 'react'
import NewPaymentForm from '../../Components/Payments/NewPaymentForm'
import UseNewPayment from '../../Hooks/Payments/NewPayment/UseNewPayment'

const NewPayment = () => {

const {newPayment, error, handleChange, handleMakePayment} = UseNewPayment()

const handleSubmitNewPayment = async (e) => {
    e.preventDefault()
    await handleMakePayment()
}

return (
    <>
        <NewPaymentForm
            status={{}} 
            payment={newPayment}
            error={error}
            handleChange={handleChange}
            handleNewPayment={handleSubmitNewPayment}
        >
        </NewPaymentForm>
    </>
)
}

export default NewPayment