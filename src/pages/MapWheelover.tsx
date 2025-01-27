import { useNavigate } from "react-router-dom";
import { AnimatedButton } from "../components/AnimatedButton";
import { BackIcon } from "../icons/BackIcon";
import { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion'
import Button3D from "../components/Button3d";
import ExitButton from "../components/ExitButton";

export function MapWheelover() {
    const navigate = useNavigate()
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = [
        "The wheel over CIR is used to determine the point of wheel over on radar display for the Blind Safety Officer.",
        "A PIL parallel to the next course is drawn to find out the wheel over CIR.",
        "A dotted line parallel to the next course is drawn on chart at the wheel over point of the selected track.",
        "The perpendicular distance between the dotted line drawn and the PIL of the next course is known as the wheel over CIR."
    ];

    const audio = ["wo1.wav","wo2.wav","wo3.wav","wo4.wav"];
    const audioRef = useRef<HTMLAudioElement | null>(null)
    
    const handleNext = () => {
        if (currentIndex < items.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    useEffect(()=>{
        if(audioRef.current) {
            audioRef.current.src = `audio/wheelover/${audio[currentIndex]}`;
            audioRef.current.play();    
        }
    },[currentIndex])

    return (
        <div className="relative overflow-hidden h-screen  text-2xl">
        <img src="/images/wo2.png" className="absolute inset-0 w-full h-full object-cover " alt="Background" />
    
            <div className="absolute left-4 top-4 z-4">
                <AnimatedButton icon={<BackIcon/>} onclick={()=>{
                    navigate(-1)
                }}/>
            </div>
            <div className="absolute top-4 right-4">
            <ExitButton/>
            </div>
            <div className="absolute right-[14%] top-[36%] z-2">
                <Button3D>Wheel Over CIR</Button3D>
            </div>
            <div className="absolute left-6 bottom-8 z-2">
          <div className="flex justify-center items-center gap-4">
            <Button3D className="bg-green-400 text-white border-b-4 border-green-700 hover:bg-green-500" onclick={()=>{navigate('/list')}}>Index</Button3D>
            <Button3D className="bg-green-400 text-white border-b-4 border-green-700 hover:bg-green-500" onclick={()=>{navigate('/')}}>Home</Button3D>
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
                        {currentIndex < 3 && <div>
                        <Button3D onclick={handleNext}>Next</Button3D>
                        </div>}
                        <div >
                        <Button3D onclick={()=>{navigate('/demonstration4')}}>Move to the Demo</Button3D>
                        </div>
                </div>
            </div>
        </div>
    )
}
