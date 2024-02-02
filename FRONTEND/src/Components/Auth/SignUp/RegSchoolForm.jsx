import React from 'react'
import Button from '../../Button'



const RegSchoolForm = ({status, subscription, school, error, handleChange, submitForm}) => {

return (

    <>
        <section className=''> 

            <p className=''> Register school </p>

            <form className='' onSubmit={submitForm}> 

                <div className='relative mt-4'>
                    <label> School name <span className='text-crimson'> * </span></label> <br />
                    <input 
                        type="text" 
                        className='w-full mt-1 p-2 border-2 rounded-md shadow-sm bg-white placeholder:italic placeholder:text-slate-400 focus:outline-2 focus:outline-blue-950'
                        value={school.name} 
                        onChange={handleChange} 
                        name="name" 
                        placeholder="Enter school name"
                    />
                    {error.name && <p className=''> {error.name}  </p> }
                </div>

                <div className='relative mt-4'>
                    <label> School address <span className='text-crimson'> * </span></label> <br />
                    <input 
                        type="text" 
                        className='w-full mt-1 p-2 border-2 rounded-md shadow-sm bg-white placeholder:italic placeholder:text-slate-400 focus:outline-2 focus:outline-blue-950'
                        value={school.address} 
                        onChange={handleChange} 
                        name="address" 
                        placeholder="Enter school address"
                    />
                    {error.address && <p className=''> {error.address}  </p> }
                </div>

                <div className='relative mt-4'>
                    <label> Email address <span className='text-crimson'> * </span></label> <br />
                    <input 
                        type="text" 
                        className='w-full mt-1 p-2 border-2 rounded-md shadow-sm bg-white placeholder:italic placeholder:text-slate-400 focus:outline-2 focus:outline-blue-950' 
                        value={school.email} 
                        onChange={handleChange} 
                        name="email" 
                        placeholder="Enter email address"
                    /> 
                    {error.email && <p className='absolute text-crimson left-0'> {error.email}  </p> }
                </div>

                <div className='relative mt-4'>
                    <label className=''> Select plan <span className='text-crimson'> * </span> </label>  <br />
                    <select 
                        className='w-full px-2 py-1 border-2 rounded-md shadow-sm bg-white placeholder:italic placeholder:text-slate-400 focus:outline-2 focus:outline-blue-950'
                        value = {school?.plan} 
                        onChange={handleChange} 
                        name='plan'
                    >

                        <option defaultValue={"choose a plan"}> Choose a plan </option>
                        {/* {subscription.map((plan) => (
                            <option value={plan?.name} key={plan?.planId}> {plan?.name} </option>
                        ))} */}
                        
                    </select>
                    {error.plan && <p className='text-crimson text-sm absolute left-0'> {error.plan} </p>}
                </div>

                <div className='text-center mt-3'>
                    <Button padding='5px 60px' margin='10px auto'> {status === 'Loading.......' ? <span> Signin up </span> : <span> Register school </span>  } </Button> 
                </div>

            </form>   

        </section>
    </>
)
}

export default RegSchoolForm