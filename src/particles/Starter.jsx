import React from 'react'
import { Navigate } from 'react-router-dom'

export function Starter({navigation}) {
    

  return (
    <Navigate to="/thisisofficial" replace={true}/>
  )
}
