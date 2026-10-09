import React, { useState } from 'react'
import { setLocalStorage } from '../../../utils/localStorage'

const Header = (props) => {
  // const [usreName, setuUserName] = useState('')
  // if(!data){
  //   setuUserName('Admin')
  // }
  // else{
  //   setuUserName(data.firstName)
  // }
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')


  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium text-white'>Hello <br /> <span className='text-3xl font-semibold'>Kiran✌️</span></h1>
      <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded hover:bg-red-800 active:scale-95'>Log Out</button>
    </div>
  )
}

export default Header