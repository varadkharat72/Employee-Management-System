import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) =>{
        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className="p-15 rounded-xl bg-gray-950">
        <h2 className='font-semibold mb-5 text-3xl text-blue-700'> Welcome! Kindly Login Here!</h2>
        <form
        onSubmit={(e)=>{
            submitHandler(e)
        }}
         className="flex flex-col items-center justify-center">
            <input 
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            required 
            className="border-2 border-gray-400 rounded-full py-3 px-9 text-xl outline-none bg-transparent hover:border-blue-500 placeholder:text-gray-400" type="email" placeholder='Enter your email' 
            />
            <input 
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            required className="mt-3 border-2 border-gray-400 rounded-full py-3 px-9 text-xl  outline-none bg-transparent hover:border-blue-500 placeholder:text-gray-400" type="password" placeholder='Enter your password' />
            <button className='mt-5 border-none rounded-full py-3 px-32 text-xl text-white outline-none bg-blue-700 hover:bg-blue-400'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
