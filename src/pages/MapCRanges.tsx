import { useNavigate } from "react-router-dom";
import { AnimatedButton } from "../components/AnimatedButton";
import { BackIcon } from "../icons/BackIcon";
import { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion'
import Button3D from "../components/Button3d";
import { Arrow } from "../components/Arrow";

export function MapCRanges() {
    const navigate = useNavigate()
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = [
        "Once the LDL is marked on chart, the clearing bearing are utilized for the visual plan and clearing ranges are utilized for the blind plan to keep the ship from venturing into dangerous waters marked on chart by LDL.",
        "The clearing Ranges are drawn parallel to the PIL on either side of the chosen track beyond which the ship should never go during the course of pilotage.",
        "The distances on chart are measured perpendicularly from the PIL to the clearing range marked using a pecked line.",
        "The distance on the side marked as NLT indicates that the perpendicular distance between own ship and ICTT edge should not be less than 1.5c at any instant in order for the ship to remain in safe waters.",
        "Similarly, the distance marked as NMT indicates that the perpendicular distance between own ship and ICTT edge should not be more than 3.1c at any instant in order for the ship to remain in safe waters.",
        "Demonstration will explain the usage of Clearing ranges by the Blind Safety Officer on Radar Display"
    ];
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const audio = ["cr1.wav","cr2.wav","cr3.wav","cr4.wav","cr5.wav","cr6.wav"]

    const handleNext = () => {
        if (currentIndex < items.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    useEffect(()=>{
        if(audioRef.current) {
            audioRef.current.src = `audio/cr/${audio[currentIndex]}`;
            audioRef.current.play()
        }
    },[currentIndex])

    return (
        <div className="relative  h-screen font-rock2 bg-cover bg-center bg-[url(/images/map.jpeg)]">
            <div className="absolute left-0">
                <AnimatedButton icon={<BackIcon/>} onclick={()=>{
                    navigate(-1)
                }}/>
            </div>
            <div className="absolute left-[2%] bottom-[8%] z-2">
                <Button3D className="bg-green-400 text-white border-b-4 border-green-700 hover:bg-green-500" onclick={()=>{navigate('/')}}>Home</Button3D>
        </div>
        <div className="absolute left-[2%] bottom-[2%] z-2">
                <Button3D className="bg-green-400 text-white border-b-4 border-green-700 hover:bg-green-500" onclick={()=>{navigate('/list')}}>Index</Button3D>
        </div>
            <div className="absolute right-[25%] top-[15%] z-2">
          <Button3D >Clearing Ranges</Button3D>
        </div>
        <div className="absolute right-[35%] top-[16%] z-2">
            <Arrow rotation={160} size={4}/>
        </div>
        <div className="absolute right-[30%] top-[20%] z-2">
            <Arrow rotation={110} size={4}/>
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
            {currentIndex < 5 && <div className="absolute right-32 bottom-12 z-2">
            <Button3D onclick={handleNext}>Next</Button3D>
            </div>}
            <audio ref={audioRef}></audio>
            <div className="absolute left-[73%] bottom-12 z-2">
            <Button3D onclick={()=>{navigate('/demonstration3')}}>Move to the Demo</Button3D>
            </div>
        </div>
    )
}
