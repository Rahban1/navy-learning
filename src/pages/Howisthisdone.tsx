import { AnimatedButton } from "../components/AnimatedButton";
import { BackIcon } from "../icons/BackIcon";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ListItem } from "../components/ListItem";
import { useEffect, useRef } from "react";

export function Howisthisdone() {
    const audioRef = useRef<HTMLAudioElement>(null);
    useEffect(()=>{
        const playAudio = async ()=>{
            try {
                await audioRef.current?.play()
            } catch (e) {
                console.log("cannot play the audio");
                
            }
        }
        playAudio()
    },[])
    const navigate = useNavigate()
    return (
        <div className="h-screen w-full font-rock2 bg-[#BEEFFF] flex flex-col justify-center items-center">
            <audio src="./audio/HowAudio.mp3" ref={audioRef}/>
            <img src="/images/left-removebg.png" className="absolute top-2 left-2 w-16 h-28" alt="logo" />
            <img src="/images/right.jpeg" className="absolute top-2 right-2 w-28 h-28" alt="logo2" />
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}
            >
                <AnimatedButton icon={<BackIcon />} onclick={() => { navigate('/definition') }} />
            </motion.div>
            <div className="flex justify-center items-center h-screen">
                <div className="max-w-[80%] min-h-40 p-4 bg-white rounded-lg shadow-lg">
                    <div className="flex flex-col items-center">
                        <div className="font-bold text-3xl text-center my-4 uppercase text-blue-600">How is This Done?</div>
                        <div className="text-xl text-center mb-4">The main aid to navigation that is used for Blind Pilotage is the High Definition Surface Warning Radar (i.e. the navigational radar fitted on the ships).</div>
                        <div className="text-xl text-center text-blue-400">However, it also includes all available non-visual aids like Decca, GPS, etc.</div>
                        <ListItem text="How accurate is Blind Pilotage" navigateTo="accuracy"/>
                    </div>

                </div>
            </div>
        </div>
    )
}
