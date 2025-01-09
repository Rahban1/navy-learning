import { useNavigate } from "react-router-dom"
import { AnimatedButton } from "../components/AnimatedButton"
import { BackIcon } from "../icons/BackIcon"
import { ListItem } from "../components/ListItem"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

export function Factors() {
    const audioRef = useRef<HTMLAudioElement>(null);
    useEffect(()=>{
        const playAudio = async ()=>{
            try {
                await audioRef.current?.play()
            } catch (e) {
                console.log("error playing audio");
                
            }
        };
        playAudio()
    },[])
    const navigate = useNavigate()
    return (
        <div className="h-screen font-rock2 w-full bg-gradient-to-b from-[#BEEFFF] to-[#A0D8E0] flex flex-col justify-center items-center">
            <audio src="./audio/FactorsAudio.mp3" ref={audioRef}/>
            <img src="/images/left-removebg.png" className="absolute top-2 left-2 w-16 h-28" alt="logo" />
            <img src="/images/right.jpeg" className="absolute top-2 right-2 w-28 h-28" alt="logo2" />
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}
                className="mb-6"
            >
                <AnimatedButton icon={<BackIcon />} onclick={() => { navigate('/howisthisdone') }}  />
            </motion.div>
            <div className="flex justify-center items-center h-screen">
                <div className="max-w-[80%] min-h-40 p-6 bg-white rounded-lg shadow-lg border border-gray-300">
                    <div className="flex flex-col items-center">
                        <div className="font-bold text-4xl text-center my-4 text-blue-600">FACTORS TO BE CONSIDERED DURING BLIND PILOTAGE</div>
                        <ul className="list-disc list-inside text-gray-700 text-2xl ">
                            <li className="my-2">The possibility of failure of radar and other aids to navigation.</li>
                            <li className="my-2">Presence of good radar conspicuous objects along the passage.</li>
                            <li className="my-2">Congestion due to density of traffic being encountered.</li>
                            <li className="my-2">Confidence of the command in the abilities of the Blind Pilotage</li>
                        </ul>
                        <ListItem text="Back to Main menu" navigateTo="list" />
                    </div>
                </div>
            </div>
        </div>
    )
}