import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const SignUpPage = () => {
    const {user,signUp} = UserAuth()
    const navigate = useNavigate()

  const [formData,setFormData] = React.useState({
    email:"",
    password:""
  })

  function handleChange(event){
    const {name,value} = event.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]:value
    }))
  }

  async function handleSubmit(event){
    event.preventDefault()
    try{
        await signUp(formData.email,formData.password)
        navigate("/")
    }
    catch(error){
        console.log(error)
    }
  }

  


  return (
    <div className="w-full h-screen flex bg-gradient-to-t from-black to-red-700 justify-start items-center flex-col font-[FrizQuadrataRegular]">
        <form onSubmit={handleSubmit} className="flex justify-evenly bg-white items-center flex-col h-[40%] px-[5%] shadow-2xl shadow-transparent mt-52 rounded-xl">
          <h1 className="text-[50px] italic first-letter:text-red-400">iTube</h1>
          <div className="flex justify-center items-end flex-col">
            <div className="flex justify-center items-center m-2">
                <label className="text-xl mr-1">E-mail:</label>
                <input type='email' name="email" value={formData.email} onChange={handleChange} className="p-1 border-[1px] border-solid border-black/10 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-black/15 focus:border-transparent" placeholder='Enter your e-mail'></input>
            </div>
            <div className="flex justify-center items-center m-2">
                <label className="text-xl mr-1">Password:</label>
                <input type='password' name="password" value={formData.password} onChange={handleChange} className=" p-1 border-[1px] border-solid border-black/10 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-black/15 focus:border-transparent" placeholder='Enter your password'></input>
            </div>
          </div>
          <button className="bg-red-400 text-white text-xl w-full py-1 rounded-2xl hover:bg-red-600 duration-500">Sign Up</button>
        </form>
    </div>
  )
}

export default SignUpPage