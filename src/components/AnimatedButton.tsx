import { motion } from "framer-motion"



export function AnimatedButton({icon, onclick} : {icon : React.ReactNode, onclick : ()=> void}) {
  return (
    <motion.button 
                className="mr-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={onclick}
            >
            {icon}
        </motion.button>
  )
}
