import React from 'react'
import Button from '../Button'

const NewPaymentForm = ({status, payment, error, handleChange, handleNewPayment}) => {

return (
    <>
        <section className=''> 

            <form className='' onSubmit={handleNewPayment}> 

                <div className='relative mt-4'>
                    <label className=''> Session <span className='text-crimson'> * </span> </label>  <br />
                    <select 
                        className='w-full px-2 py-1 border-2 rounded-md shadow-sm bg-white placeholder:italic placeholder:text-slate-400 focus:outline-2 focus:outline-blue-950'
                        value = {payment?.session} 
                        onChange={handleChange} 
                        name='session'
                    >

                        <option defaultValue={"Choose session"}> Choose session </option>
                        <option value={"20232024"}> 20232024 </option>
                        
                    </select>
                    {error.session && <p className='text-crimson text-sm absolute left-0'> {error.session} </p>}
                </div>

                <div className='relative mt-4'>
                    <label className=''> Term <span className='text-crimson'> * </span> </label>  <br />
                    <select 
                        className='w-full px-2 py-1 border-2 rounded-md shadow-sm bg-white placeholder:italic placeholder:text-slate-400 focus:outline-2 focus:outline-blue-950'
                        value = {payment?.term} 
                        onChange={handleChange} 
                        name='term'
                    >

                        <option defaultValue={"Choose term"}> Choose term </option>
                        <option value={"Second"}> Second </option>
                        
                    </select>
                    {error.term && <p className='text-crimson text-sm absolute left-0'> {error.term} </p>}
                </div>

                <div className='relative mt-4'>
                    <label className=''> Class <span className='text-crimson'> * </span> </label>  <br />
                    <select 
                        className='w-full px-2 py-1 border-2 rounded-md shadow-sm bg-white placeholder:italic placeholder:text-slate-400 focus:outline-2 focus:outline-blue-950'
                        value = {payment?.class} 
                        onChange={handleChange} 
                        name='class'
                    >

                        <option defaultValue={"Choose class"}> Choose class </option>
                        <option value={"Basic Two"}> Basic Two </option>
                        
                    </select>
                    {error.class && <p className='text-crimson text-sm absolute left-0'> {error.class} </p>}
                </div>

                <div className='relative mt-4'>
                    <label> Received From <span className='text-crimson'> * </span></label> <br />
                    <input 
                        type="text" 
                        className='w-full mt-1 p-2 border-2 rounded-md shadow-sm bg-white placeholder:italic placeholder:text-slate-400 focus:outline-2 focus:outline-blue-950' 
                        value={payment.name} 
                        onChange={handleChange} 
                        name="name" 
                        placeholder="First Name Middle Name Last Name"   
                    /> 
                    {error.name && <p className='absolute text-crimson left-0'> {error.name}  </p> }
                </div>

                <div className='relative mt-4'>
                    <label> Student Id </label> <br />
                    <input 
                        type="text" 
                        className='w-full mt-1 p-2 border-2 rounded-md shadow-sm bg-white placeholder:italic placeholder:text-slate-400 focus:outline-2 focus:outline-blue-950' 
                        value={payment.studentId} 
                        onChange={handleChange} 
                        name="studentId" 
                        placeholder=""   
                    /> 
                    {error.studentId && <p className='absolute text-crimson left-0'> {error.studentId}  </p> }
                </div>

                <div className='relative mt-4'>
                    <label className=''> Being Payment For <span className='text-crimson'> * </span> </label>  <br />
                    <select 
                        className='w-full px-2 py-1 border-2 rounded-md shadow-sm bg-white placeholder:italic placeholder:text-slate-400 focus:outline-2 focus:outline-blue-950'
                        value = {payment?.purpose} 
                        onChange={handleChange} 
                        name='purpose'
                    >

                        <option defaultValue={"Choose purpose of payment"}> Choose purpose of payment </option>
                        <option value={"Stationary"}> Stationary </option>
                        
                    </select>
                    {error.purpose && <p className='text-crimson text-sm absolute left-0'> {error.purpose} </p>}
                </div>

                <div className='relative mt-4'>
                    <label> Amount <span className='text-crimson'> * </span></label> <br />
                    <input 
                        type="text" 
                        className='w-full mt-1 p-2 border-2 rounded-md shadow-sm bg-white placeholder:italic placeholder:text-slate-400 focus:outline-2 focus:outline-blue-950' 
                        value={payment.amount} 
                        onChange={handleChange} 
                        name="amount" 
                        placeholder="Enter amount"
                    /> 
                    {error.amount && <p className='absolute text-crimson left-0'> {error.amount}  </p> }
                </div>

                <div className='relative mt-4'>
                    <label> Discount <strong> % </strong> :  </label> <br />
                    <input 
                        type="text" 
                        className='w-full mt-1 p-2 border-2 rounded-md shadow-sm bg-white placeholder:italic placeholder:text-slate-400 focus:outline-2 focus:outline-blue-950' 
                        value={payment.discount} 
                        onChange={handleChange} 
                        name="discount" 
                        placeholder="Enter discount rate"
                    /> 
                    {error.discount && <p className='absolute text-crimson left-0'> {error.discount}  </p> }
                </div>

                <div className='text-center mt-3'>
                    <Button padding='5px 60px' margin='10px auto'> {status === 'Loading.......' ? <span> Processing </span> : <span> Complete payment </span>  } </Button> 
                </div>

            </form>   

        </section>
    </>
)
}

export default NewPaymentForm