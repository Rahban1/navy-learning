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

    <div className="relative overflow-hidden h-screen font-rock2 bg-cover bg-center bg-[url(/images/rad.jpeg)]">
        <div className="absolute top-4 right-4">
            <ExitButton/>
        </div>
        <AnimatedButton icon={<BackIcon/>} onclick={()=>{navigate(-1)}}/>
    <div className="w-1/2 absolute left-[5%] top-[30%] flex flex-col gap-4 z-10">
        <video ref={video1ref} className="w-6/7 max-w-2xl h-auto" >
            <source src="./videos/cir.mp4" type="video/mp4" />
                Your browser does not support the video tag.
        </video>
        <audio ref={audioRef}></audio>
        </div>
        {items[currentIndex] && <div className=" absolute top-[30%] text-center w-1/3 py-8 px-6 right-24  z-4 bg-[#00000066] text-3xl font-rock2 font-bold  text-white leading-relaxed">
                <ol>
                    <motion.li 
                        key={currentIndex} 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 1.3 }}
                        className="py-2 px-6"
                    >
                        {items[currentIndex]}
                    </motion.li>
                </ol>
            </div>}
            {step === 1 && <div className=" absolute top-[30%] text-center w-1/3 py-8 px-6 right-24  z-4 bg-[#00000066] text-3xl font-rock2 font-bold  text-white leading-relaxed">
                    <motion.p 
                        key={currentIndex} 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 1.3 }}
                        className="py-2 px-6"
                    >
                        {items2[0]}
                    </motion.p>
                    <audio ref={ref1}></audio>
            </div>}
            {step === 2 && <div className=" absolute top-[30%] text-center w-1/3 py-8 px-6 right-24  z-4 bg-[#00000066] text-3xl font-rock2 font-bold  text-white leading-relaxed">
                    <motion.p 
                        key={currentIndex} 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 1.3 }}
                        className="py-2 px-6"
                    >
                        {items2[1]}
                    </motion.p>
                    <audio ref={ref2}></audio>

            </div>}
            {step === 3 && <div className=" absolute top-[30%] text-center w-1/3 py-8 px-6 right-24  z-4 bg-[#00000066] text-3xl font-rock2 font-bold  text-white leading-relaxed">
                    <motion.p 
                        key={currentIndex} 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 1.3 }}
                        className="py-2 px-6"
                    >
                        {items2[2]}
                    </motion.p>
                    <audio ref={ref3}></audio>

            </div>}
            {step === 4 && <div className=" absolute top-[30%] text-center w-1/3 py-8 px-6 right-24  z-4 bg-[#00000066] text-3xl font-rock2 font-bold  text-white leading-relaxed">
                    <motion.p 
                        key={currentIndex} 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 1.3 }}
                        className="py-2 px-6"
                    >
                        {items2[3]}
                    </motion.p>
                    <audio ref={ref4}></audio>

            </div>}
            {step === 5 && <div className=" absolute top-[30%] text-center w-1/3 py-8 px-6 right-24  z-4 bg-[#00000066] text-3xl font-rock2 font-bold  text-white leading-relaxed">
                    <motion.p 
                        key={currentIndex} 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 1.3 }}
                        className="py-2 px-6"
                    >
                        {items2[4]}
                    </motion.p>
                    <audio ref={ref5}></audio>

            </div>}
            {step === 6 && <div className=" absolute top-[30%] text-center w-1/3 py-8 px-6 right-24  z-4 bg-[#00000066] text-3xl font-rock2 font-bold  text-white leading-relaxed">
                    <motion.p 
                        key={currentIndex} 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 1.3 }}
                        className="py-2 px-6"
                    >
                        {items2[5]}
                    </motion.p>

            </div>}
            {step === 7 && <div className=" absolute top-[30%] text-center w-1/3 py-8 px-6 right-24  z-4 bg-[#00000066] text-3xl font-rock2 font-bold  text-white leading-relaxed">
                    <motion.p 
                        key={currentIndex} 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 1.3 }}
                        className="py-2 px-6"
                    >
                        {items2[6]}
                    </motion.p>
                    <audio ref={ref6}></audio>

            </div>}
            {currentIndex < 1 && <div className="absolute right-32 bottom-12 z-2">
            <Button3D onclick={handleNext}>Next</Button3D>
            </div>}
            <div className="absolute left-6 bottom-8 z-2">
                <div className="flex justify-center items-center gap-4">
                    <Button3D className="bg-green-400 text-white border-b-4 border-green-700 hover:bg-green-500" onclick={()=>{navigate('/list')}}>Index</Button3D>
                    <Button3D className="bg-green-400 text-white border-b-4 border-green-700 hover:bg-green-500" onclick={()=>{navigate('/')}}>Home</Button3D>
                </div>
        </div>
            
            
    </div>
  )
}
