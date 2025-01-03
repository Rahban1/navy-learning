import { useNavigate } from "react-router-dom";
import { PlayIcon } from "../icons/PlayIcon";
import { motion } from "framer-motion";

export function Home() {
    const navigate = useNavigate();
    return (
        <div className="w-full h-screen flex justify-center items-center bg-blue-200 relative">
            <img src="/cover2.png" className="absolute inset-0 w-full h-full object-cover" alt="Background" />
            <div className="main z-10 flex flex-col items-center text-white">
                <div className="text-xl text-gray-400 mb-4 ">DISCOVER A FUN WAY OF LEARNING ABOUT</div>
                <div className="text-6xl m-4 font-extrabold mb-6 font-pirou">BLIND PILOTAGE</div>
                <motion.button 
                className="m-4"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={()=> {navigate('/list')}}
            >
            <PlayIcon size={76}/>
        </motion.button>
            </div>
        </div>
    )
}
