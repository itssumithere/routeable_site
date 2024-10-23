import React from 'react'
import { useParams } from 'react-router-dom'

function Github() {
    const {userid} = useParams('1')
  return (
    <div>
      <h1>this is github : {userid}</h1>
    </div>
  )
}

export default Github
