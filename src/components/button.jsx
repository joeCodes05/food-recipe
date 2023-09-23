import React from 'react'

const Button = ({text}) => {
  return (
    <>
      <button className='py-3 px-6 bg-primary duration-700 hover:bg-gray-900 text-white rounded-[50px]'>
        {text}
      </button>
    </>
  )
}

export default Button