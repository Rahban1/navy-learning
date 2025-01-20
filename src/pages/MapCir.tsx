import { useNavigate } from "react-router-dom";
import { AnimatedButton } from "../components/AnimatedButton";
import { BackIcon } from "../icons/BackIcon";
import { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion'
import Button3D from "../components/Button3d";
import { Arrow } from "../components/Arrow";
import ExitButton from "../components/ExitButton";

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
        <div className="relative overflow-hidden h-screen  text-2xl">
        <img src="/images/cirmap.png" className="absolute inset-0 w-full h-full " alt="Background" />
    
            <div className="absolute left-2 top-2 z-4">
                <AnimatedButton icon={<BackIcon/>} onclick={()=>{
                    navigate(-1)
                }}/>
            </div>
            <div className="absolute top-4 right-4">
            <ExitButton/>
            </div>
            <div className="absolute left-6 bottom-8 z-2">
          <div className="flex justify-center items-center gap-4">
            <Button3D className="bg-green-400 text-white border-b-4 border-green-700 hover:bg-green-500" onclick={()=>{navigate('/list')}}>Index</Button3D>
            <Button3D className="bg-green-400 text-white border-b-4 border-green-700 hover:bg-green-500" onclick={()=>{navigate('/')}}>Home</Button3D>
          </div>
        </div>
        <div className="absolute top-[43%] left-[40%]">
            <div className="relative z-2">
            <Button3D>Cross Index Range</Button3D>
            </div>
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
            <div className="absolute right-10 bottom-8 z-2">
                <div className="flex justify-center items-center gap-4">
                        {currentIndex < 2 && <div>
                        <Button3D onclick={handleNext}>Next</Button3D>
                        </div>}
                        <div >
                        <Button3D onclick={()=>{navigate('/demonstration2')}}>Move to the Demo</Button3D>
                        </div>
                </div>
            </div>
            
        </div>
    )
}
