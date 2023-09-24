import React, { useContext } from 'react'
import { GlobalContext } from '../context/themeContext'

const Button = ({text}) => {
  const { theme } = useContext(GlobalContext);
  return (
    <>
      <button className={`py-3 px-6 bg-primary duration-700 ${theme ? "hover:bg-white hover:text-gray-900" : "hover:bg-gray-900"} text-white rounded-[50px]`}>
        {text}
      </button>
    </>
  )
}

export default Button