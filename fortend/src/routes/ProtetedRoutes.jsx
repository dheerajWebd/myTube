import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtetedRoutes = ({Children}) => {
  const navigator = useNavigate()
  useEffect(() => {
    
    const token = localStorage.getItem('token')
    if (!token) {
      navigator('/login')
    }
  }, [])
  return (
   ""
  )
}

export default ProtetedRoutes
