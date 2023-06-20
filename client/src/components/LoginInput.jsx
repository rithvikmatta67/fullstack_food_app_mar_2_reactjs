import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { fadeInOut } from '../animations';


const LoginInput = ({placeHolder, icon, inputState, inputStateFunc, type, isSignUp}) => {
  const [isFocous, setisFocous] = useState(false);
  return (
    <motion.div 
    {...fadeInOut}
     className={`flex items-center justify-center gap-4 bg-lightOverlay backdrop-blur-md rounded-md w-full px-4 py-2
     ${isFocous ? "shadow-md shadow-red-400" : "shadow-none"}`}
    >
        
        {icon}
        <input type={type} 
        placeholder={placeHolder} 
        className="w-full h-full bg-transparent text-headingColor text-lg font-semibold border-none outline-none"
        value={inputState} onChange={(e) => inputStateFunc(e.target.value)} 
        onFocus={() => setisFocous(true)} 
        onBlur={() => setisFocous(false)} />
    </motion.div>
  )
}

export default LoginInput