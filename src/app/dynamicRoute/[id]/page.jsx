import React from 'react'

const page = ({params}) => {
    // console.log(params)//{ id: '2' } whatevev in the route
  return (
    <h1> {params.id} of dynamic route</h1>
  )
}

export default page