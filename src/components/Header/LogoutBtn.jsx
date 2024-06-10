import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = ()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button
    className='px-6 py-2 inline-block duration-200 hover:bg-blue-100 rounded-full'
    >LogoutBtn</button>
  )
}

export default LogoutBtn