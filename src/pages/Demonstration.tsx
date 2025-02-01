import { useNavigate } from "react-router-dom";
import { AnimatedButton } from "../components/AnimatedButton";
import { BackIcon } from "../icons/BackIcon";
import { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion'
import Button3D from "../components/Button3d";
import ExitButton from "../components/ExitButton";

export  function Demonstration() {
    const [currentIndex,setCurrentIndex] = useState(0);
    const [step, setStep] = useState(0);
    const video1ref = useRef<HTMLVideoElement>(null);
    const video2ref = useRef<HTMLVideoElement>(null);
    const ref = useRef<HTMLAudioElement>(null);
    const ref2 = useRef<HTMLAudioElement>(null);
    const ref3 = useRef<HTMLAudioElement>(null);

    const items = [
        "In this demonstration we will see how the PIL gives an indication of the ship being on track or off track on the radar display.",
        "As you saw on the chart display earlier, that the PIL at ICTT berth edge is at a distance of 2.7c which is the CIR (Port).",
        "The ship begins to move along the track and the blind safety officer uses the PIL feature of the radar to set a PIL parallel to course 078 ½ at a distance of 2.7c (0.27Nm).",
        "The ICTT edge touches the PIL when the ship proceeds on track on course 078 ½."]
    const items2 = [
        "As the ship begins to go off track to port the ICTT berth comes closer to the ship on the radar display and crosses the PIL set at 2.7c thus giving an indication to the blind safety officer that the ship is off track to port.",
        "Similarly, as the ship starts to regain track the ICTT berth starts moving back to the original position which is touching the PIL.",
        "Subsequently as the ship moves starboard of track, ICTT berth edge moves farther away from the PIL and thus gives an indication that the ship is off track to starboard."]
    const navigate = useNavigate()
    const handleNext = ()=>{
        setCurrentIndex(currentIndex + 1)
        if(currentIndex == 3){
            video1ref.current?.play();
            video2ref.current?.play();
            const timer1 = setTimeout(()=>{
                setStep(1);
            },12000)
            const timer2 = setTimeout(()=>{
                setStep(2);
            },44000)
            const timer3 = setTimeout(()=>{
                setStep(3);
            },73000)

            return(()=>{
                clearTimeout(timer1)
                clearTimeout(timer2);
                clearTimeout(timer3);
            })
            
        }
    }
    const audio = ["d1.wav","d1n1.wav","d1n2.wav","d4.wav"]
    const audioRef = useRef<HTMLAudioElement | null>(null);
    useEffect(()=>{
        if(audioRef.current) {
            audioRef.current.src  =`audio/demo1/${audio[currentIndex]}`;
            audioRef.current.play()
        }
    },[currentIndex]);
    useEffect(()=>{
        if(step === 1 && ref.current) {
            ref.current.src = `audio/demo1/d1n3.wav`;
            ref.current.play();
        }
        if(step === 2 && ref2.current) {
            ref2.current.src = `audio/demo1/d6.wav`;
            ref2.current.play();
        }
        if(step === 3 && ref3.current) {
            ref3.current.src = `audio/demo1/d7.wav`;
            ref3.current.play();
        }
    },[step])

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
            <div className="flex flex-col my-auto h-[86%] w-[97%] mx-auto">
                <div className=" h-[75%] flex gap-3 justify-between items-center px-4 ">
                    <div className="h-full w-full flex items-center justify-center">
                        <video ref={video1ref} className="h-full w-full object-contain" >
                            <source src="./videos/map1.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="h-full w-full flex items-center justify-center">
                        <video ref={video2ref} className="h-full w-full object-contain" >
                            <source src="./videos/radar1.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    {items[currentIndex] && (
                        <div className="w-[89%] mx-auto text-center py-1 px-6 bg-[#00000066] text-3xl font-rock2 font-bold text-white leading-relaxed">
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
                        <div className="w-[89%] mx-auto text-center py-1 px-6 bg-[#00000066] text-3xl font-rock2 font-bold text-white leading-relaxed">
                            <motion.p 
                                key="step1"
                                initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }} 
                                transition={{ duration: 1.3 }}
                                className="py-2 px-6"
                            >
                                {items2[0]}
                            </motion.p>
                            <audio ref={ref}></audio>
                        </div>
                    )}
                    {step === 2 && (
                        <div className="w-[89%] mx-auto text-center py-1 px-6 bg-[#00000066] text-3xl font-rock2 font-bold text-white leading-relaxed">
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
                        <div className="w-[89%] mx-auto text-center py-1 px-6 bg-[#00000066] text-3xl font-rock2 font-bold text-white leading-relaxed">
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
                </div>
            </div>
            <div className="flex justify-between items-center w-screen h-[7%] px-4">
                <div className="flex justify-center items-center gap-4">
                    <Button3D className="bg-green-400 text-white border-b-4 border-green-700 hover:bg-green-500" onclick={()=>{navigate('/list')}}>Index</Button3D>
                    <Button3D className="bg-green-400 text-white border-b-4 border-green-700 hover:bg-green-500" onclick={()=>{navigate('/')}}>Home</Button3D>
                </div>
                {currentIndex < 4 && (
                    <Button3D onclick={handleNext}>Next</Button3D>
                )}
            </div>
        </div>
    )
          
    
}

