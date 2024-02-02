import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../Button'
//import { BsEyeSlash, BsEye } from "react-icons/bs";

const LoginForm = ({status, user, error, handleChange, handleLoginUser, showPassword, handleShowPassword}) => {

return (

    <>
        <section className=''>

            <p className=''> Sign in to your account </p>

            <form className='w-full text-sm font-Montserrat text-my-primary' onSubmit={handleLoginUser}>

                <div>
                    <label> Username <span className='text-crimson'> * </span></label> <br />
                    <input 
                        type='text' 
                        className= 'w-full mt-1 p-2 border-2 rounded-md shadow-sm bg-white placeholder:italic placeholder:text-slate-400 focus:outline-2 focus:outline-blue-950'
                        value={user.username} 
                        onChange={handleChange} 
                        placeholder='Enter username' 
                        name='username'
                    />
                    {error.username && <p className='absolute text-crimson left-0'> {error.username}  </p> }
                </div>

                <div className='relative mt-3'>
                    <label> Password <span className='text-crimson'> * </span></label> <br />
                    <input 
                        type={showPassword ? 'text' : 'password'}  
                        className= 'w-full mt-1 p-2 border-2 rounded-md shadow-sm bg-white placeholder:italic placeholder:text-slate-400 focus:outline-2 focus:outline-blue-950'
                        value={user.password} 
                        onChange={handleChange} 
                        placeholder='Enter password' 
                        name='password' 
                    /> 
                    {error.password && <p className='absolute text-crimson left-0'> {error.password} </p> }

                    {/* <div className="text-lg absolute top-8 right-4 cursor-pointer" onClick={handleShowPassword}>
                        {showPassword ? <BsEye /> : <BsEyeSlash />}
                    </div>  */}

                </div>

                <div className='text-center mt-3'>
                    <Button padding='5px 60px' margin='10px auto'> {status === 'Loading.......' ? <span> Logging in </span> : <span> Sign in </span>}</Button>  
                </div>

            </form>

            <div className='text-center text-my-primary font-Montserrat text-sm'>

                <p> <Link to='/forgot-password' className='text-blue-600'> Forgot password </Link> </p>

            </div>   

        </section>
    </>
)
}

export default LoginForm