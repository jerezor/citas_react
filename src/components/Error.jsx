import { useState, useEffect } from "react"
const Error = ({children}) => {
  return (
        <div className=" bg-red-800 text-center font-bold uppercase text-white rounded-md p-3 mb-3">
            {children}
        </div>
)
}

export default Error