import React from 'react'
import { HashLoader } from "react-spinners";

function Loading() {
  return (
    <div className='h-screen flex justify-center items-center'>
      <HashLoader size={48} color='#008fd5'/>
    </div>
  )
}

export default Loading
