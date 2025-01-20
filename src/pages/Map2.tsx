import { useNavigate } from "react-router-dom";
import { AnimatedButton } from "../components/AnimatedButton";
import { BackIcon } from "../icons/BackIcon";
import { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion'
import Button3D from "../components/Button3d";
import { Arrow } from "../components/Arrow";
import ExitButton from "../components/ExitButton";

export function Map2() {
    const navigate = useNavigate()
    const [currentIndex, setCurrentIndex] = useState(0);
    const audioRef = useRef<HTMLAudioElement | null>(null)

    const audio = [
        "pil1.wav","pil2.wav","pil3.wav","pil4.wav","pil5.wav"
    ]

    useEffect(()=>{
        if(audioRef.current) {
            audioRef.current.src = `audio/pil/${audio[currentIndex]}`;
            audioRef.current.play();
        }
    },[currentIndex])

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
        <div className="relative overflow-hidden h-screen  text-2xl">
        <img src="/images/map.jpeg" className="absolute inset-0 w-full h-full " alt="Background" />
    
            <div className="absolute left-0">
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
        <div className="absolute top-[13%] left-[65%]">
            <div className="relative z-2">
            <Button3D>Parallel Index Line</Button3D>
            </div>
            <div className="absolute top-0 transform -translate-x-14 left-0 z-2">
                <Arrow rotation={180}/>
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
            <audio  ref={audioRef}></audio>
            <div className="absolute right-10 bottom-8 z-2">
                <div className="flex justify-center items-center gap-4">
                        {currentIndex < 4 && <div>
                        <Button3D onclick={handleNext}>Next</Button3D>
                        </div>}
                        <div >
                        <Button3D onclick={()=>{navigate('/demonstration')}}>Move to the Demo</Button3D>
                        </div>
                </div>
            </div>
        </div>
    )
}
