import { useNavigate } from "react-router-dom"
import { AnimatedButton } from "../components/AnimatedButton"
import { BackIcon } from "../icons/BackIcon"
import { ListItem } from "../components/ListItem"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

export function Accuracy() {
    const audioRef = useRef<HTMLAudioElement>(null);
    useEffect(()=>{
        const playAudio = async ()=>{
            try {
                await audioRef.current?.play()
            } catch (e) {
                console.log("error playing audio");
                
            }
        };
        playAudio();
    },[])
    const navigate = useNavigate()
    return (
        <div className="h-screen font-rock2 w-full flex flex-col justify-center items-center">
            <audio src="./audio/AccuracyAudio.mp3" ref={audioRef}/>
            <img src="/images/rad.jpeg" className="-z-10 absolute inset-0 w-full h-full object-cover" alt="Background" />

            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}
            >
                <AnimatedButton icon={<BackIcon />} onclick={() => { navigate('/howisthisdone') }}  />
            </motion.div>
            <div className="flex justify-center items-center h-screen">
                <div className="max-w-[80%] min-h-40 p-4 text-white rounded-lg shadow-lg border border-gray-300 bg-[#00000066]">
                    <div className="flex flex-col items-center">
                        <div className="font-bold text-3xl text-center my-4 ">ACCURACY</div>
                        <div className="text-xl text-center mb-4 text-[#007BFF]">The accuracy of Blind Pilotage is such that the ship can be taken to an open anchorage and anchored to within <span className="font-semibold">50 yards</span> of the desired position.</div>
                        <div className="text-xl text-center ">However, the degree of risks involved must be carefully assessed before embarking on a passage relying totally on Blind Pilotage in conditions of poor visibility.</div>
                        <ListItem text="Factors that need to be borne in mind" navigateTo="factors" />
                    </div>
                </div>
            </div>
        </div>
    )
}