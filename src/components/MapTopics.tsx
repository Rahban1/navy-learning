import { motion } from 'framer-motion'

export function MapTopics({text,secondText, onclick} : {text : string, secondText ?: string, onclick ?: () => void}) {
  return (
    <motion.button 
        onClick={onclick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="text-white bg-blue-500 border text-2xl text-center px-2 py-1 z-2 border-black flex flex-col justify-center items-center">
        <span>{text}</span>
        {secondText && <span>{secondText}</span>}
    </motion.button>
  )
}
