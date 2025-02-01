import { useNavigate } from "react-router-dom";
import { AnimatedButton } from "../components/AnimatedButton";
import { BackIcon } from "../icons/BackIcon";
import { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion'
import Button3D from "../components/Button3d";
import ExitButton from "../components/ExitButton";

export function Demonstration4() {
    const [currentIndex,setCurrentIndex] = useState(0);
    const [step, setStep] = useState(0);
    const video1ref = useRef<HTMLVideoElement>(null);
    const items = [
        "The PIL is set to 0.5c in the direction of the next course that is 107 ½  and the EBL/VRM is centered on the edge of Willingdon Island."
        ]
    const items2 = [
        "The EBL is set opposite to the course at 258 ½ and the VRM is set so as to intersect the PIL and EBL together.",
        "The Value of VRM at the intersection gives the distance to wheel over at any instant until the PIL set at 0.5c touches the Willingdon Island edge denoting the ship at wheel over when the course is altered to 107 ½"
        ]
    const audioRef = useRef<HTMLAudioElement | null>(null);
    useEffect(()=>{
        if(audioRef.current) {
            audioRef.current.src = `audio/demo4/d4n1.wav`;
            if(currentIndex === 0){
                audioRef.current.play()
            }
        }
    },[currentIndex])
    useEffect(()=>{
        if(step === 1 && ref1.current) {
            ref1.current.src = `audio/demo4/d4n2.wav`;
            ref1.current.play();
        }
        if(step === 2 && ref2.current) {
            ref2.current.src = `audio/demo4/d4n3.wav`;
            ref2.current.play();
        }
    },[step])
    const ref1 = useRef<HTMLAudioElement | null>(null);
    const ref2 = useRef<HTMLAudioElement | null>(null);
    

    const navigate = useNavigate()
    const handleNext = ()=>{
        setCurrentIndex(currentIndex + 1)
        if(currentIndex == 0){
            video1ref.current?.play();
            const timer1 = setTimeout(()=>{
                setStep(1);
            },100)
            const timer2 = setTimeout(()=>{
                setStep(2);
            },25000)
            
            return(()=>{
                clearTimeout(timer1)
                clearTimeout(timer2);
            })
            
        }
    }
    return (
        <div className="h-screen font-rock2 bg-cover bg-center bg-[url(/images/rad.jpeg)] flex flex-col">
            <audio ref={audioRef}></audio>
            <div className="flex justify-between h-[7%] items-center w-screen">
                <div className="px-2">
                    <AnimatedButton icon={<BackIcon/>} onclick={()=>{navigate(-1)}}/>
                </div>
                <div className="pr-6">
                    <ExitButton/>
                </div>
            </div>
            <div className="flex flex-col h-[86%] w-[97%] mx-auto">
                <div className="h-[83%] flex justify-center items-center">
                    <video ref={video1ref} className="h-full w-full object-contain" >
                        <source src="./videos/wheelover.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="h-[40%] flex items-center justify-center overflow-y-auto">
                    {items[currentIndex] && (
                        <div className="w-[80%] mx-auto text-center py-1 px-6 bg-[#00000066] text-2xl font-rock2 font-bold text-white leading-relaxed">
                            <motion.li 
                                key={currentIndex} 
                                initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }} 
                                transition={{ duration: 1.3 }}
                                className="py-2 px-6 list-none"
                            >
                                {items[currentIndex]}
                            </motion.li>
                        </div>
                    )}
                    {step === 1 && (
                        <div className="w-[75%] mx-auto text-center py-1 px-6 bg-[#00000066] text-2xl font-rock2 font-bold text-white leading-relaxed">
                            <motion.p 
                                key="step1"
                                initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }} 
                                transition={{ duration: 1.3 }}
                                className="py-2 px-6"
                            >
                                {items2[0]}
                            </motion.p>
                            <audio ref={ref1}></audio>
                        </div>
                    )}
                    {step === 2 && (
                        <div className="w-[89%] mx-auto text-center py-1 px-6 bg-[#00000066] text-2xl font-rock2 font-bold text-white leading-relaxed">
                            <motion.p 
                                key="step2"
                                initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }} 
                                transition={{ duration: 1.3 }}
                                className="py-2 px-6"
                            >
                                {items2[1]}
                            </motion.p>
                            <audio ref={ref2}></audio>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex justify-between items-center w-screen h-[7%] px-4">
                <div className="flex justify-center items-center gap-4">
                    <Button3D className="bg-green-400 text-white border-b-4 border-green-700 hover:bg-green-500" onclick={()=>{navigate('/list')}}>Index</Button3D>
                    <Button3D className="bg-green-400 text-white border-b-4 border-green-700 hover:bg-green-500" onclick={()=>{navigate('/')}}>Home</Button3D>
                </div>
                {currentIndex < 1 && (
                    <Button3D onclick={handleNext}>Next</Button3D>
                )}
            </div>
        </div>
    )
    
}

