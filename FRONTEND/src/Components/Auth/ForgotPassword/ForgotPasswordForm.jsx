import React from 'react'
import Button from '../../Button'

const ForgotPasswordForm = ({status, user, error, handleChange, handleForgotPassword}) => {


return (
    <>
        <section className='w-96 h-auto mx-auto md:translate-y-10 lg:translate-y-20'>

        <p className='font-Jost md:text-xl lg:text-3xl mb-3 text-blue-950 font-bold'> Forgot Password </p>

        <form onSubmit={handleForgotPassword} className='w-full relative text-sm font-Montserrat text-my-primary'>

            <label> Email address <span className='text-crimson'> * </span></label> <br />

            <input 
                type="text" 
                className= 'w-full mt-2 p-2 border-2 rounded-md shadow-sm bg-white placeholder:italic placeholder:text-slate-400 focus:outline-2 focus:outline-blue-950' 
                value={user.email} 
                onChange={handleChange} 
                name="email" 
                placeholder="Enter your registered email address"
            />

            {error.email && <p className='text-crimson absolute left-0 mt-1'> {error.email}  </p> }

            <div className='text-center mt-4 text-sm'>
                <Button padding='5px 60px' margin='10px auto'> {status === 'Loading.......' ? <span> Sending </span> : <span> Send Reset Link </span> } </Button>  
            </div>

        </form>

        </section>
    </>
)
}

export default ForgotPasswordForm