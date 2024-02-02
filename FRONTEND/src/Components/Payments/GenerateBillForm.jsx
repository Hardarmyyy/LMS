import React from 'react'
import Button from '../Button'

const GenerateBillForm = ({status, bill, error, handleChange, handleGenerateBill}) => {

return (
    <>
        <section className=''> 

            <p className=''> Generate bill </p>

            <form className='' onSubmit={handleGenerateBill}> 

                <div className='relative mt-4'>
                    <label> Session / Year <span className='text-crimson'> * </span></label> <br />
                    <input 
                        type="text" 
                        className='w-full mt-1 p-2 border-2 rounded-md shadow-sm bg-white placeholder:italic placeholder:text-slate-400 focus:outline-2 focus:outline-blue-950'
                        value={bill.session} 
                        onChange={handleChange} 
                        name="session" 
                        placeholder="Ex: 2023/2024"
                    />
                    {error.session && <p className=''> {error.session}  </p> }
                </div>

                <div className='relative mt-4'>
                    <label> Term <span className='text-crimson'> * </span></label> <br />
                    <input 
                        type="text" 
                        className='w-full mt-1 p-2 border-2 rounded-md shadow-sm bg-white placeholder:italic placeholder:text-slate-400 focus:outline-2 focus:outline-blue-950'
                        value={bill.term} 
                        onChange={handleChange} 
                        name="term" 
                        placeholder="Ex: First"
                    />
                    {error.term && <p className=''> {error.term}  </p> }
                </div>

                <div className='relative mt-4'>
                    <label> Class <span className='text-crimson'> * </span></label> <br />
                    <input 
                        type="text" 
                        className='w-full mt-1 p-2 border-2 rounded-md shadow-sm bg-white placeholder:italic placeholder:text-slate-400 focus:outline-2 focus:outline-blue-950' 
                        value={bill.class} 
                        onChange={handleChange} 
                        name="class" 
                        placeholder="Ex: Basic One"
                    /> 
                    {error.class && <p className='absolute text-crimson left-0'> {error.class}  </p> }
                </div>

                <div className='relative mt-4'>
                    <label> Payment For <span className='text-crimson'> * </span></label> <br />
                    <input 
                        type="text" 
                        className='w-full mt-1 p-2 border-2 rounded-md shadow-sm bg-white placeholder:italic placeholder:text-slate-400 focus:outline-2 focus:outline-blue-950' 
                        value={bill.purpose} 
                        onChange={handleChange} 
                        name="purpose" 
                        placeholder="Ex: Tuition"
                    /> 
                    {error.purpose && <p className='absolute text-crimson left-0'> {error.purpose}  </p> }
                </div>

                <div className='relative mt-4'>
                    <label> Amount <span className='text-crimson'> * </span></label> <br />
                    <input 
                        type="text" 
                        className='w-full mt-1 p-2 border-2 rounded-md shadow-sm bg-white placeholder:italic placeholder:text-slate-400 focus:outline-2 focus:outline-blue-950' 
                        value={bill.amount} 
                        onChange={handleChange} 
                        name="amount" 
                        placeholder="Enter amount"
                    /> 
                    {error.amount && <p className='absolute text-crimson left-0'> {error.amount}  </p> }
                </div>

                <div className='text-center mt-3'>
                    <Button padding='5px 60px' margin='10px auto'> {status === 'Loading.......' ? <span> Generating ... </span> : <span> Generate bill </span>  } </Button> 
                </div>

            </form>   

        </section>
    </>
)
}

export default GenerateBillForm