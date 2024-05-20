import React from 'react'
import { useParams } from 'react-router-dom'

const Userdata = () => {
  const userId =1;
    const {id}=useParams()
  return (
    <div>Userdata<h2>User Id is {id}</h2></div>
  )
}

export default Userdata