import React from 'react'
import { useLocation } from 'react-router-dom'
import Button from './Button';

const RegistrationForm = ({status, user, error, handleChange, handleRegister}) => {

const location = useLocation();
const showEmployee = location.pathname === '/portal/register-new-employee'
const showStudent = location.pathname === '/portal/register-new-student'

return (

<>
    <section className=''> 

        {showStudent && <p className=''> Register new student </p> }

        {showEmployee && <p className=''> Register new employee </p> }

        <form className='' onSubmit={handleRegister}> 

            <div className='relative mt-4'>
                <label> First name <span className='text-crimson'> * </span></label> <br />
                <input 
                    type="text" 
                    className='w-full mt-1 p-2 border-2 rounded-md shadow-sm bg-white placeholder:italic placeholder:text-slate-400 focus:outline-2 focus:outline-blue-950'
                    value={user.firstName} 
                    onChange={handleChange} 
                    name="firstName" 
                    placeholder="Enter first name"
                />
                {error.firstName && <p className=''> {error.firstName}  </p> }
            </div>

            <div className='relative mt-4'>
                <label> Middle name <span className='text-crimson'> * </span></label> <br />
                <input 
                    type="text" 
                    className='w-full mt-1 p-2 border-2 rounded-md shadow-sm bg-white placeholder:italic placeholder:text-slate-400 focus:outline-2 focus:outline-blue-950'
                    value={user.middleName} 
                    onChange={handleChange} 
                    name="middleName" 
                    placeholder="Enter middle name"
                />
                {error.middleName && <p className=''> {error.middleName}  </p> }
            </div>

            <div className='relative mt-4'>
                <label> Last name <span className='text-crimson'> * </span></label> <br />
                <input 
                    type="text" 
                    className='w-full mt-1 p-2 border-2 rounded-md shadow-sm bg-white placeholder:italic placeholder:text-slate-400 focus:outline-2 focus:outline-blue-950' 
                    value={user.lastName} 
                    onChange={handleChange} 
                    name="lastName" 
                    placeholder="Enter last name"
                /> 
                {error.lastName && <p className='absolute text-crimson left-0'> {error.lastName}  </p> }
            </div>

            <div className='relative mt-4'>
                <label> Date of Birth <span className='text-crimson'> * </span></label> <br />
                <input 
                    type="text" 
                    className='w-full mt-1 p-2 border-2 rounded-md shadow-sm bg-white placeholder:italic placeholder:text-slate-400 focus:outline-2 focus:outline-blue-950' 
                    value={user.dob} 
                    onChange={handleChange} 
                    name="dob" 
                    placeholder="01/01/2023"
                /> 
                {error.dob && <p className='absolute text-crimson left-0'> {error.dob}  </p> }
            </div>

            <div className='relative mt-4'>
                <label> Age <span className='text-crimson'> * </span></label> <br />
                <input 
                    type="text" 
                    className='w-full mt-1 p-2 border-2 rounded-md shadow-sm bg-white placeholder:italic placeholder:text-slate-400 focus:outline-2 focus:outline-blue-950' 
                    value={user.age} 
                    onChange={handleChange} 
                    name="age" 
                /> 
                {error.age && <p className='absolute text-crimson left-0'> {error.age}  </p> }
            </div>

            <div className='relative mt-4'>
                <label className=''> Gender <span className='text-crimson'> * </span> </label>  <br />
                <select 
                    className='w-full px-2 py-1 border-2 rounded-md shadow-sm bg-white placeholder:italic placeholder:text-slate-400 focus:outline-2 focus:outline-blue-950'
                    value = {user.gender} 
                    onChange={handleChange} 
                    name='gender'
                >

                    <option defaultValue={"choose a gender"}> Select gender </option>
                    <option value={"male"}> Male </option>
                    <option value={"female"}> Female </option>
                    
                </select>
                {error.gender && <p className='absolute text-crimson left-0'> {error.gender}  </p> }
            </div>

            {showStudent && 
                <>
                    <div className='relative mt-4'>
                        <label className=''> Status <span className='text-crimson'> * </span> </label>  <br />
                        <select 
                            className='w-full px-2 py-1 border-2 rounded-md shadow-sm bg-white placeholder:italic placeholder:text-slate-400 focus:outline-2 focus:outline-blue-950'
                            value = {user.status} 
                            onChange={handleChange} 
                            name='status'
                        >

                            <option defaultValue={"choose"}> Choose option </option>
                            <option value={"enrolled"}> Enrolled </option>
                            <option value={"unenrolled"}> Unenrolled </option>
                            <option value={"graduated"}> Graduated </option>
                            
                        </select>
                        {error.status && <p className='absolute text-crimson left-0'> {error.status}  </p> }
                    </div>

                    {user.status && 
                        <>
                            <div className='relative mt-4'>
                                <label className=''> 
                                    {user.status === 'enrolled' 
                                        ? <span> Year of enrollment <span className='text-crimson'> * </span> </span> 
                                            : user.status === 'graduated' ? <span> Year of graduation <span className='text-crimson'> * </span> </span> 
                                                : <span> Year of unenrollment <span className='text-crimson'> * </span> </span>  }
                                </label> <br />
                                
                                <select 
                                    className='w-full px-2 py-1 border-2 rounded-md shadow-sm bg-white placeholder:italic placeholder:text-slate-400 focus:outline-2 focus:outline-blue-950'
                                    value = {user.session} 
                                    onChange={handleChange} 
                                    name='session'
                                >

                                    <option defaultValue={"choose session"}> Choose session </option>
                                    <option value={"20232024"}> 2023/2024 </option>
                                    
                                </select>
                                
                                {error.session && <p className='absolute text-crimson left-0'> {error.session}  </p> }
                            </div>

                            <div className='relative mt-4'>
                                <label> Class <span className='text-crimson'> * </span></label> <br />
                                <select 
                                    className='w-full px-2 py-1 border-2 rounded-md shadow-sm bg-white placeholder:italic placeholder:text-slate-400 focus:outline-2 focus:outline-blue-950'
                                    value = {user.class} 
                                    onChange={handleChange} 
                                    name='class'
                                >

                                    <option defaultValue={"select class"}> choose class </option>
                                    <option value={"Basic One"}> Basic one </option>
                                    
                                </select>
                                {error.class && <p className='absolute text-crimson left-0'> {error.class}  </p> }
                            </div>
                        </>
                    }
                </>
            }

            <div className='relative mt-4'>
                <label> State of Origin <span className='text-crimson'> * </span></label> <br />
                <select 
                    className='w-full px-2 py-1 border-2 rounded-md shadow-sm bg-white placeholder:italic placeholder:text-slate-400 focus:outline-2 focus:outline-blue-950'
                    value = {user.origin} 
                    onChange={handleChange} 
                    name='origin'
                >

                    <option defaultValue={"choose origin"}> Select state of origin </option>
                    <option value={"Lagos"}> Lagos state </option>
                    
                </select>
                {error.origin && <p className='absolute text-crimson left-0'> {error.origin}  </p> }
            </div>

            <div className='relative mt-4'>
                <label> L.G.A <span className='text-crimson'> * </span></label> <br />
                <select 
                    className='w-full px-2 py-1 border-2 rounded-md shadow-sm bg-white placeholder:italic placeholder:text-slate-400 focus:outline-2 focus:outline-blue-950'
                    value = {user.lga} 
                    onChange={handleChange} 
                    name='lga'
                >

                    <option defaultValue={"choose L.G.A"}> Choose L.G.A </option>
                    <option value={"Agege"}> Agege Local Governement </option>
                    
                </select>
                {error.lga && <p className='absolute text-crimson left-0'> {error.lga}  </p>}
            </div>

            <div className='relative mt-4'>
                <label> Phone number <span className='text-crimson'> * </span></label> <br />
                <input 
                    type="text" 
                    className='w-full mt-1 p-2 border-2 rounded-md shadow-sm bg-white placeholder:italic placeholder:text-slate-400 focus:outline-2 focus:outline-blue-950' 
                    value={user.phoneNumber} 
                    onChange={handleChange} 
                    name="phoneNumber" 
                    placeholder="Enter phone number"
                /> 
                {error.phoneNumber && <p className='absolute text-crimson left-0'> {error.phoneNumber}  </p> }
            </div>

            <div className='relative mt-4'>
                <label> Other phone Number </label> <br />
                <input 
                    type="text" 
                    className='w-full mt-1 p-2 border-2 rounded-md shadow-sm bg-white placeholder:italic placeholder:text-slate-400 focus:outline-2 focus:outline-blue-950' 
                    value={user.otherPhoneNumber} 
                    onChange={handleChange} 
                    name="otherPhoneNumber" 
                    placeholder="Enter other phone number"
                /> 
                {error.otherPhoneNumber && <p className='absolute text-crimson left-0'> {error.otherPhoneNumber}  </p> }
            </div>

            <div className='relative mt-4'>
                <label> Email-address <span className='text-crimson'> * </span></label> <br />
                <input 
                    type="text" 
                    className='w-full mt-1 p-2 border-2 rounded-md shadow-sm bg-white placeholder:italic placeholder:text-slate-400 focus:outline-2 focus:outline-blue-950' 
                    value={user.email} 
                    onChange={handleChange} 
                    name="email" 
                    placeholder="Enter email address"
                /> 
                {error.email && <p className='absolute text-crimson left-0'> {error.email}  </p> }
            </div>

            <div className='relative mt-4'>
                <label> Home address <span className='text-crimson'> * </span></label> <br />
                <input 
                    type="text" 
                    className='w-full mt-1 p-2 border-2 rounded-md shadow-sm bg-white placeholder:italic placeholder:text-slate-400 focus:outline-2 focus:outline-blue-950' 
                    value={user.address} 
                    onChange={handleChange} 
                    name="address" 
                    placeholder="Enter home address"
                /> 
                {error.address && <p className='absolute text-crimson left-0'> {error.address}  </p> }
            </div>

            <div className='text-center mt-3'>
                <Button padding='5px 60px' margin='10px auto'> {status === 'Loading.......' ? <span> Registering ... </span> : <span> Register </span>  } </Button> 
            </div>

        </form>   

    </section>
</>

)
}

export default RegistrationForm