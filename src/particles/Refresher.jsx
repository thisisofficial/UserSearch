import React from 'react'
import { Navigate, useParams } from 'react-router-dom'

export function Refresher({navigation}) {
    const {name} = useParams();

  return (
    <Navigate to={"/"+name} replace={true}/>
  )
}
