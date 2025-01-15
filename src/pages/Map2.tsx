import { useNavigate } from "react-router-dom";
import { AnimatedButton } from "../components/AnimatedButton";
import { BackIcon } from "../icons/BackIcon";
import { useState } from "react";
import { motion } from 'framer-motion'

export function Map2() {
    const navigate = useNavigate()
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = [
        "A Parallel Index Line (PIL) is drawn parallel to the chosen track touching the edge of the radar conspicuous object.",
        "It should be noted that radar conspicuous object should not include drying heights as the same may or may not paint on radar depending on tidal conditions.",
        "The perpendicular distance is then measured between the chosen track and the PIL which is known as Cross Index Range (CIR).",
        "This CIR is used to determine whether the ship on track or off track and by how much using the PIL feature on Radar Display. The same is explained in the demo ahead.",
        "A blind plan may or may not have a PIL each on either side of the track or may have multiple PILs depending on the availability of Radar Conspicuous Objects."
    ];

    const handleNext = () => {
        if (currentIndex < items.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div className="relative  h-screen font-rock2 bg-cover bg-center bg-[url(/images/map.jpeg)]">
            <div className="absolute right-0">
                <AnimatedButton icon={<BackIcon/>} onclick={()=>{
                    navigate('/map')
                }}/>
            </div>
            <div className="w-1/3 absolute top-[40%] text-center left-4 py-4 px-4  z-4 bg-[#00000066] text-2xl font-rock2 font-bold  text-white">
                <ol>
                    <motion.li 
                        key={currentIndex} 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 1.3 }}
                        className="py-2  pl-6"
                    >
                        {items[currentIndex]}
                    </motion.li>
                </ol>
            </div>
            {currentIndex < 4 && <motion.button 
                onClick={handleNext}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute right-32 bottom-16 mt-4 bg-blue-500 text-white py-2 px-4 text-2xl rounded"
            >Next</motion.button>}
            <motion.button 
                onClick={()=>{navigate('/demonstration')}}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute left-[70%] bottom-16 mt-4 bg-blue-500 text-white py-2 px-4 text-2xl rounded"
            >Move to the Demo</motion.button>
        </div>
    )
}
