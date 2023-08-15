import React, { useState } from 'react'
import { MdEmail } from 'react-icons/md'
import { AiFillEye } from "react-icons/ai"
import { RiAccountCircleLine } from "react-icons/ri"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { useHistory } from "react-router-dom"
import axios from 'axios'


const SignUp = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const history = useHistory();

    const submit = async () => {
        if (!name || !email || !password) {
            alert("Please fill all fields")
            return;
        }

        try {
            const { data } = await axios.post("http://localhost:5000/api/user", { name, email, password })
            alert("Registration successfull");
            localStorage.setItem("userInfo", JSON.stringify(data));
            history.push("/chats")
        } catch (error) {
            alert("Error")
            console.log(error)
        }
    }


    return (
        <>
            <div className="container px-5 bg-[url('https://cdn.wallpapersafari.com/71/80/25nOUq.jpg')] bg-gray-50 h-screen min-w-[100vw] flex justify-center items-center">
                <div className="box border-2 min-w-auto border-black p-8 flex flex-col  items-center bg-gray-100 rounded-3xl">
                    <h1 className='text-4xl font-serif font-bold mt-4 '>Login</h1>
                    <div className="form flex flex-col gap-4 justify-center items-center mt-7 w-full">

                        <div className="name w-auto flex bg-slate-300 rounded-xl justify-center items-center p-2 max-w-lg">
                            <input className=' bg-slate-300 p-1 rounded-xl outline-none min-w-min' type="text"
                                placeholder='Name'
                                value={name}
                                onChange={(e) => setName(e.target.value)} />
                            <RiAccountCircleLine
                                size={"25px"} />
                        </div>
                        <div className="email w-auto flex bg-slate-300 rounded-xl justify-center items-center p-2 max-w-lg ">
                            <input className=' bg-slate-300 p-1 rounded-xl outline-none min-w-min' type="email"
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <MdEmail
                                size={"25px"} />
                        </div>

                        <div className="password flex bg-slate-300 rounded-xl justify-center items-center p-2">
                            <input className='bg-slate-300 p-1 rounded-xl  outline-none min-w-min' type="text"
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                            <AiFillEye
                                className='hover:cursor-pointer'
                                size={"25px"} />
                        </div>



                        <div className="button mt-4 w-full flex justify-center">
                            <button className='bg-blue-700 p-2 w-1/2 rounded-xl text-lg font-mono font-bold hover:scale-95'
                                onClick={submit}
                            >Register</button>
                        </div>

                        <h2 className='mt-6 text-lg'>Already have an account? <Link className="text-red-500 font-bold underline hover:text-red-600" to="/">Login</Link> </h2>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp