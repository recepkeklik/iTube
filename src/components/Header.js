import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'


const Header = () => {
  const {user,logOut} = UserAuth()
  const navigate = useNavigate()

  async function handleLogOut(){
    try{
      await logOut()
      navigate("/")
    }
    catch(error){
      console.log(error)
    }
  }

  let Navigate = useNavigate();
  function handleChange(value) {
    Navigate(`${value}`);
    value = "";
  }


  return (
    <div className="w-full flex justify-between items-center px-[2%] shadow-lg shadow-black/10 py-3">
        <Link to="/" className="m-2"><img className='w-32' src="../iTube.png"/></Link>
        {user?.email ? 
        <select className="w-[18%] cursor-pointer py-2.5 px-0 text-center text-md text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-white dark:border-white focus:outline-none focus:ring-0 focus:border-gray-200 peer" onChange={event => handleChange(event.target.value)}>
          <option style={{}} className="bg-black cursor-pointer" value="Home">Home</option>
          <option style={{}} className="bg-black cursor-pointer" value="Movies">Movies</option>
          <option style={{}} className="bg-black cursor-pointer" value="Series">Series</option>
        </select> : 
        <></>
        }
        
        {user?.email ? 
          <div className="flex text-[18px]">
            <Link to="Account" className="flex justify-center items-center mr-5 border-solid  rounded-[7px] py-1 w-24 cursor-pointer">
                <h2  className="font-Inter text-white">{user.email.split("@")[0]}</h2>
            </Link>
            <Link onClick={handleLogOut} className="text-white flex justify-center items-center border-[1px] border-solid bg-red-600 px-3  text-white rounded-[7px] py-1   cursor-pointer hover:bg-red-700 duration-300">
                <i class="fa-solid fa-user-plus mr-[7px] text-white"></i>
                <h2 className="font-Inter text-white">Log Out</h2>
            </Link>
          </div> : 
          <div className="flex text-[18px]">
            <Link to="LoginPage" className="flex justify-center items-center mr-5 border-[1px] border-solid  rounded-[7px] py-1 px-3 cursor-pointer hover:bg-black/10 duration-300">
                <i class="fa-solid fa-right-to-bracket mr-[7px] text-white"></i>
                <h2  className="font-Arial text-white">Log In</h2>
            </Link>
            <Link to="SignUpPage" className="text-white flex justify-center items-center border-[1px] border-solid bg-red-600 px-3  text-white rounded-[7px] py-1   cursor-pointer hover:bg-red-700 duration-300">
                <i class="fa-solid fa-user-plus mr-[7px] text-white"></i>
                <h2 className="font-Inter text-white">Sign Up</h2>
            </Link>
          </div>
        }
    </div>
  )
}

export default Header