import React, { useState } from 'react'

const Login = ({ handleLogin }) => {



    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)

        setEmail("")
        setPassword("")

    }


    return (
        <div className='flex items-center justify-center h-screen w-screen'>
            <div className='border-2 p-20 border-emerald-600 rounded'>
            <h1 className='text-emerald-300 text-center mb-10 text-6xl'>Login Here</h1>
            
                <form onSubmit={(e) => {
                    submitHandler(e)
                }}
                    className='flex flex-col items-center justify-center text-white'>
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)

                        }}
                        required
                        className='border-2 border-emerald-600 py-3 text-xl outline-none bg-transparent px-10 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' />
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required
                        className='border-2 border-emerald-600 py-3 text-xl outline-none bg-transparent px-10 rounded-full placeholder:text-gray-400 mt-7' type="password" placeholder='Enter your password' />
                    <button className=' mt-15 border-none bg-emerald-600 py-3 text-xl outline-none active:bg-emerald-800 px-20 rounded-full'>Log in</button>
                </form>
            </div>

        </div>
    )
}

export default Login