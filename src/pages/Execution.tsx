import { useNavigate } from "react-router-dom";
import { AnimatedButton } from "../components/AnimatedButton";
import { BackIcon } from "../icons/BackIcon";
import { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion'
import Button3D from "../components/Button3d";
import ExitButton from "../components/ExitButton";

export function Execution() {
    const [currentIndex,setCurrentIndex] = useState(0);
    const [step, setStep] = useState(0);
    const video1ref = useRef<HTMLVideoElement>(null);
    const items = [
        "The Radar display is optimized by the blind safety officer, by placing the PILs and centering the EBL/VRM as per blind plan."
        ]
    const items2 = [
        "As the ship moves along the track the blind safety officer reports as per sequence using a combination of all tools explained previously.",
        "Bridge Blind, Make Ship 40 yards port of track, distance to wheel over 2.7 cables.",
        "Bridge Blind, Make Ship 40 Yards port of track, distance to wheel over 1.9 cables.",
        "Bridge Blind, Make ship 20 yards port of track, distance to wheel over 1.5 cables",
        "Bridge blind, 60 yards to wheel over)",
        "Bridge Blind, Ship at Wheel Over.",
        "Whilst the ship is settling on to the next leg, the Blind Safety Officer is to optimise the display for the next leg along with monitoring the turn and advising the NO as to how the ship is settling for next leg."
        ]
        const audioRef = useRef<HTMLAudioElement| null>(null)
        useEffect(()=>{
            if(audioRef.current) {
                audioRef.current.src = `audio/execution/e1.wav`;
                if(currentIndex == 0){
                    audioRef.current.play()
                }
            }
        },[currentIndex])
        useEffect(()=>{
            if(step === 1 && ref1.current) {
                ref1.current.src = `audio/execution/e2.wav`;
                ref1.current.play()
            }
            if(step === 2 && ref2.current) {
                ref2.current.src = `audio/execution/e3.wav`;
                ref2.current.play()
            }
            if(step === 3 && ref3.current) {
                ref3.current.src = `audio/execution/e4.wav`;
                ref3.current.play()
            }
            if(step === 4 && ref4.current) {
                ref4.current.src = `audio/execution/e5.wav`;
                ref4.current.play()
            }
            if(step === 5 && ref5.current) {
                ref5.current.src = `audio/execution/e6.wav`;
                ref5.current.play()
            }
            if(step === 6 && ref6.current) {
                ref6.current.src = `audio/execution/e7.wav`;
                ref6.current.play()
            }
            if(step === 7 && ref7.current) {
                ref7.current.src = `audio/execution/e8.wav`;
                ref7.current.play()
            }            
        },[step])
        const ref1 = useRef<HTMLAudioElement | null>(null);
        const ref2 = useRef<HTMLAudioElement | null>(null);
        const ref3 = useRef<HTMLAudioElement | null>(null);
        const ref4 = useRef<HTMLAudioElement | null>(null);
        const ref5 = useRef<HTMLAudioElement | null>(null);
        const ref6 = useRef<HTMLAudioElement | null>(null);
        const ref7 = useRef<HTMLAudioElement | null>(null);
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
            },20000)
            const timer3 = setTimeout(()=>{
                setStep(3);
            },30000)
            const timer4 = setTimeout(()=>{
                setStep(4);
            },38000)
            const timer5 = setTimeout(()=>{
                setStep(5);
            },47000)
            const timer6 = setTimeout(()=>{
                setStep(6);
            },51000)
            const timer7 = setTimeout(()=>{
                setStep(7);
            },60000)
            
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

    <div className="relative h-screen font-rock2 bg-cover bg-center bg-[url(/images/rad.jpeg)]">
        <div className="absolute top-4 right-4">
            <ExitButton />
        </div>
        <AnimatedButton icon={<BackIcon/>} onclick={()=>{navigate('/list')}}/>
        <div className="w-1/2 absolute left-[5%] top-[30%] flex flex-col gap-4 z-10">
        <video ref={video1ref} className="w-6/7 max-w-3xl h-auto" >
            <source src="./videos/execution.mp4" type="video/mp4" />
                Your browser does not support the video tag.
        </video>
        <audio ref={audioRef}></audio>

        </div>
        <div className=" absolute top-[30%] text-center w-1/3 py-8 px-6 right-24  z-4 bg-[#00000066] text-3xl font-rock2 font-bold  text-white leading-relaxed">
                <ol>
                    <motion.li 
                        key={currentIndex} 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 1.3 }}
                        className="py-2  px-6"
                    >
                        {items[currentIndex]}
                    </motion.li>
                </ol>
            </div>
            {step === 1 && <div className=" absolute top-[30%] text-center w-1/3 py-8 px-6 right-24  z-4 bg-[#00000066] text-3xl font-rock2 font-bold  text-white leading-relaxed">
                    <motion.p 
                        key={currentIndex} 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 1.3 }}
                        className="py-2  px-6"
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
                        className="py-2  px-6"
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
                        className="py-2  px-6"
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
                        className="py-2  px-6"
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
                        className="py-2  px-6"
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
                        className="py-2  px-6"
                    >
                        {items2[5]}
                    </motion.p>
                    <audio ref={ref6}></audio>

            </div>}
            {step === 7 && <div className=" absolute top-[30%] text-center w-1/3 py-8 px-6 right-24  z-4 bg-[#00000066] text-3xl font-rock2 font-bold  text-white leading-relaxed">
                    <motion.p 
                        key={currentIndex} 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 1.3 }}
                        className="py-2  px-6"
                    >
                        {items2[6]}
                    </motion.p>
                    <audio ref={ref7}></audio>

            </div>}
            {currentIndex < 1 && <div className="absolute right-32 bottom-16 z-2">
            <Button3D onclick={handleNext}>Next</Button3D>
            </div>}
            <div className="absolute left-[2%] bottom-[8%] z-2">
                <Button3D className="bg-green-400 text-white border-b-4 border-green-700 hover:bg-green-500" onclick={()=>{navigate('/')}}>Home</Button3D>
        </div>
        <div className="absolute left-[2%] bottom-[2%] z-2">
                <Button3D className="bg-green-400 text-white border-b-4 border-green-700 hover:bg-green-500" onclick={()=>{navigate('/list')}}>Index</Button3D>
        </div>
            
            
    </div>
  )
}
