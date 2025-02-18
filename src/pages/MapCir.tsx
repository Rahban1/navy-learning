import { useNavigate } from "react-router-dom";
import { AnimatedButton } from "../components/AnimatedButton";
import { BackIcon } from "../icons/BackIcon";
import { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion'
import Button3D from "../components/Button3d";
import { Arrow } from "../components/Arrow";

export function MapCir() {
    const navigate = useNavigate()
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = [
        "The Cross Index Range is the ideal range at which the PIL should just touch the radar conspicuous object in order for the ship to be on track.",
        "It is the perpendicular distance between the chosen track and the Parallel Index Line.",
        "The EBL and VRM feature of the radar is used to determine as to how much the ship is off track to port or starboard. The same is explained through a demonstration."
    ];

    const audio = ["cir1.wav", "cir2.wav", "cir3.wav"];

    const audioRef = useRef<HTMLAudioElement | null>(null);

    const handleNext = () => {
        if (currentIndex < items.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    useEffect(()=>{
        if(audioRef.current) {
            audioRef.current.src = `audio/cir/${audio[currentIndex]}`;
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
            <div className="absolute right-[49%] top-[51%] z-2">
            <Button3D>Cross Index Range</Button3D>
            </div>
        <div className="absolute right-[52%] top-[38%] z-2">
            <Arrow rotation={270} size={4}/>
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
            <audio ref={audioRef}></audio>
            {currentIndex < 2 && <div className="absolute right-32 bottom-12 z-2">
            <Button3D onclick={handleNext}>Next</Button3D>
            </div>}
            <div className="absolute left-[73%] bottom-12 z-2">
            <Button3D onclick={()=>{navigate('/demonstration2')}}>Move to the Demo</Button3D>
            </div>
        </div>
    )
}
