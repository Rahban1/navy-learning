import { useNavigate } from "react-router-dom";
import { AnimatedButton } from "../components/AnimatedButton";
import { BackIcon } from "../icons/BackIcon";
import { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion'
import Button3D from "../components/Button3d";
import ExitButton from "../components/ExitButton";

export function Demonstration2() {
    const [currentIndex,setCurrentIndex] = useState(0);
    const [step, setStep] = useState(0);
    const video1ref = useRef<HTMLVideoElement>(null);
    const items = [
        "This video will demonstrate the usage of CIR and the EBL/VRM feature to determine the distance by which the ship is off track."]
    const items2 = [
        "The EBL /VRM feature is selected and is centered on the edge of ICTT berth which should be touching the PIL for the ship to be on track on course 078 ½", 
        "The EBL is set perpendicular to the PIL.",
        "The VRM is now so adjusted that the PIL just touches the VRM circle as a tangent.",
        "The value of VRM circle gives the distance by which the ship is off track.",
        "It is observed that as the ship moves to port, ICTT edge crosses the PIL till the VRM value is 0.05Nm that is 100 yards port of track.",
        "",
        "Subsequently the ship regains track and begins to move to starboard, thereby causing ICTT edge to move away from the PIL on opposite side. The value of VRM circle is 0.03Nm thus indicating the ship to be 60 yards starboard of track."
        ]
    const navigate = useNavigate()
    const audioRef = useRef<HTMLAudioElement | null>(null);
    useEffect(()=>{
        if(audioRef.current) {
            audioRef.current.src = `audio/demo2/d1.wav`;
            if(currentIndex === 0){
                audioRef.current.play()
            }
        }
    },[currentIndex])
    useEffect(()=>{
        if(step === 1 && ref1.current) {
            ref1.current.src = `audio/demo2/d2n3.wav`;
            ref1.current.play()
        }
        if(step === 2 && ref2.current) {
            ref2.current.src = `audio/demo2/d3.wav`;
            ref2.current.play()
        }
        if(step === 3 && ref3.current) {
            ref3.current.src = `audio/demo2/d4.wav`;
            ref3.current.play()
        }
        if(step === 4 && ref4.current) {
            ref4.current.src = `audio/demo2/d5.wav`;
            ref4.current.play()
        }
        if(step === 5 && ref5.current) {
            ref5.current.src = `audio/demo2/d2n1.wav`;
            ref5.current.play()
        }
        if(step === 7 && ref6.current) {
            ref6.current.src = `audio/demo2/d2n2.wav`;
            ref6.current.play()
        }
    },[step])
    const ref1 = useRef<HTMLAudioElement | null>(null);
    const ref2 = useRef<HTMLAudioElement | null>(null);
    const ref3 = useRef<HTMLAudioElement | null>(null);
    const ref4 = useRef<HTMLAudioElement | null>(null);
    const ref5 = useRef<HTMLAudioElement | null>(null);
    const ref6 = useRef<HTMLAudioElement | null>(null);

    const handleNext = ()=>{
        setCurrentIndex(currentIndex + 1)
        if(currentIndex == 0){
            video1ref.current?.play();
            const timer1 = setTimeout(()=>{
                setStep(1);
            },100)
            const timer2 = setTimeout(()=>{
                setStep(2);
            },21000)
            const timer3 = setTimeout(()=>{
                setStep(3);
            },30000)
            const timer4 = setTimeout(()=>{
                setStep(4);
            },45000)
            const timer5 = setTimeout(()=>{
                setStep(5);
            },70000)
            const timer6 = setTimeout(()=>{
                setStep(6);
            },86000)
            const timer7 = setTimeout(()=>{
                setStep(7);
            },110000)

            return(()=>{
                clearTimeout(timer1)
                clearTimeout(timer2);
                clearTimeout(timer3);
                clearTimeout(timer4)
                clearTimeout(timer5);
                clearTimeout(timer6);
                clearTimeout(timer7);
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
                <div className="h-[90%]  flex justify-center items-center">
                    <video ref={video1ref} className="h-full w-full object-contain" >
                        <source src="./videos/cir.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="h-[40%] flex items-center justify-center overflow-y-auto">
                    {items[currentIndex] && (
                        <div className="w-[66%] mx-auto text-center py-4 px-6 bg-[#00000066] text-2xl font-rock2 font-bold text-white leading-relaxed">
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
                        <div className="w-[80%] mx-auto text-center py-4 px-6 bg-[#00000066] text-2xl font-rock2 font-bold text-white leading-relaxed">
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
                        <div className="w-[66%] mx-auto text-center py-4 px-6 bg-[#00000066] text-3xl font-rock2 font-bold text-white leading-relaxed">
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
                    {step === 3 && (
                        <div className="w-[75%] mx-auto text-center py-4 px-6 bg-[#00000066] text-3xl font-rock2 font-bold text-white leading-relaxed">
                            <motion.p 
                                key="step3"
                                initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }} 
                                transition={{ duration: 1.3 }}
                                className="py-2 px-6"
                            >
                                {items2[2]}
                            </motion.p>
                            <audio ref={ref3}></audio>
                        </div>
                    )}
                    {step === 4 && (
                        <div className="w-[75%] mx-auto text-center py-4 px-6 bg-[#00000066] text-3xl font-rock2 font-bold text-white leading-relaxed">
                            <motion.p 
                                key="step4"
                                initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }} 
                                transition={{ duration: 1.3 }}
                                className="py-2 px-6"
                            >
                                {items2[3]}
                            </motion.p>
                            <audio ref={ref4}></audio>
                        </div>
                    )}
                    {step === 5 && (
                        <div className="w-[80%] mx-auto text-center py-4 px-6 bg-[#00000066] text-2xl font-rock2 font-bold text-white leading-relaxed">
                            <motion.p 
                                key="step5"
                                initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }} 
                                transition={{ duration: 1.3 }}
                                className="py-2 px-6"
                            >
                                {items2[4]}
                            </motion.p>
                            <audio ref={ref5}></audio>
                        </div>
                    )}
                    {step === 7 && (
                        <div className="w-[95%] mx-auto text-center py-4 px-6 bg-[#00000066] text-2xl font-rock2 font-bold text-white leading-relaxed">
                            <motion.p 
                                key="step7"
                                initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }} 
                                transition={{ duration: 1.3 }}
                                className="py-2 px-6"
                            >
                                {items2[6]}
                            </motion.p>
                            <audio ref={ref6}></audio>
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

