import { useNavigate } from "react-router-dom";
import { PlayIcon } from "../icons/PlayIcon";
import { motion } from "framer-motion";

export function ListItem({text, navigateTo } : { text : string; navigateTo : string}) {
    const navigate = useNavigate()
  return (
    <div className="flex my-4 items-center">
        
        <motion.button 
                className="mr-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={()=> {navigate(`/${navigateTo}`)}}
            >
            <PlayIcon size={40}/>
        </motion.button>
        <button onClick={()=> {navigate(`/${navigateTo}`)}}>
            <div className="font-bold text-3xl hover:text-[#0F93E1]">{text}</div>
        </button>    
    </div>
  )
}
