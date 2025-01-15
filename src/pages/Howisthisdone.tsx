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
        <div className="h-screen w-full font-rock2 flex flex-col justify-center items-center">
            <audio src="./audio/HowAudio.mp3" ref={audioRef}/>
            <img src="/images/rad.jpeg" className="-z-10 absolute inset-0 w-full h-full object-cover" alt="Background" />
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}
            >
                <AnimatedButton icon={<BackIcon />} onclick={() => { navigate(-1) }} />
            </motion.div>
            <div className="flex justify-center items-center h-screen text-white ">
                <div className="max-w-[80%] min-h-40 p-4  rounded-lg shadow-lg bg-[#00000066] border border-gray-300">
                    <div className="flex flex-col items-center">
                        <div className="font-bold text-3xl text-center my-4 uppercase text-blue-600">How is This Done?</div>
                        <div className="text-xl text-center mb-4">The main aid to navigation that is used for Blind Pilotage is the High Definition Surface Warning Radar <br /> (i.e. the navigational radar fitted on the ships).</div>
                        <div className="text-xl text-center text-blue-400">However, it also includes all available non-visual aids like Decca, GPS, etc.</div>
                        <ListItem text="How accurate is Blind Pilotage" navigateTo="accuracy"/>
                    </div>

                </div>
            </div>
        </div>
    )
}
