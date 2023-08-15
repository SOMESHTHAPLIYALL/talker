import React from 'react'
import { MdEmail } from 'react-icons/md'
import { AiFillEye } from "react-icons/ai"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Login = () => {
    return (
        <>
            <div className="container px-5 bg-[url('https://cdn.wallpapersafari.com/71/80/25nOUq.jpg')] bg-gray-50 h-screen min-w-[100vw] flex justify-center items-center">
                <div className="box border-2  border-black p-8 flex flex-col  items-center bg-gray-100 rounded-3xl">
                    <h1 className='text-4xl font-serif font-bold mt-4 '>Login</h1>
                    <div className="form flex flex-col gap-4 justify-center items-center mt-7 w-full">

                        <div className="email w-auto flex bg-slate-300 rounded-xl justify-center items-center p-2 max-w-lg">
                            <input className=' bg-slate-300 p-1 rounded-xl outline-none' type="email"
                                placeholder='Email' />
                            <MdEmail
                                size={"25px"} />
                        </div>

                        <div className="email flex bg-slate-300 rounded-xl justify-center items-center p-2">
                            <input className='bg-slate-300 p-1 rounded-xl  outline-none' type="text"
                                placeholder='Password' />
                            <AiFillEye
                                className='hover:cursor-pointer'
                                size={"25px"} />
                        </div>

                        <div className="button mt-4 w-full flex justify-center">
                            <button className='bg-blue-700 p-2 w-1/2 rounded-xl text-lg font-mono font-bold hover:scale-95'>Login</button>
                        </div>

                        <h2 className='mt-6 text-lg'>Don't have an account? <Link className="text-red-500 font-bold underline hover:text-red-600" to="/signup">Register</Link> </h2>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login