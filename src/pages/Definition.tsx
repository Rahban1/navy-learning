import { useNavigate } from "react-router-dom";
import { AnimatedButton } from "../components/AnimatedButton";
import { BackIcon } from "../icons/BackIcon";
import { ListItem } from "../components/ListItem";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export function Definition() {
    const audioRef = useRef<HTMLAudioElement>(null)
    useEffect(()=>{
        const playAudio = async () => {
            try {
                await audioRef.current?.play()
            } catch (e) {
                console.log("failed to play audio");
                
            }
        }
        playAudio();
    },[])
    const navigate = useNavigate()
    return (
        <div className="h-screen w-full  flex flex-col justify-center items-center font-rock2">
            <audio ref={audioRef} src="./audio/definitionAudio.mp3"/>
            <img src="/images/rad.jpeg" className="-z-10 absolute inset-0 w-full h-full object-cover" alt="Background" />

            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}
            >
                <AnimatedButton icon={<BackIcon />} onclick={() => { navigate('/list') }} />
            </motion.div>
            <div className="flex justify-center items-center h-screen">
                <div className="max-w-[80%] min-h-40 p-4 bg-[#00000066] rounded-lg shadow-lg border border-gray-300">
                    <div className="flex flex-col items-center">
                        <div className="font-bold text-3xl text-center my-4 text-blue-600">DEFINITION</div>
                        <div className="text-xl text-center text-white">Blind Pilotage means the navigating of the ship through restricted waters in low visibility with little or no recourse to the visual observation of objects outside the ship</div>
                        <div className="flex justify-center text-white">
                            <ListItem text="How is this done" navigateTo="howisthisdone" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
