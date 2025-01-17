import { useNavigate } from "react-router-dom";
import { AnimatedButton } from "../components/AnimatedButton";
import { BackIcon } from "../icons/BackIcon";
import { useRef, useState } from "react";
import { motion } from 'framer-motion'
import Button3D from "../components/Button3d";

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
        
        <AnimatedButton icon={<BackIcon/>} onclick={()=>{navigate('/list')}}/>
        <div className="w-1/2 absolute left-[5%] top-[30%] flex flex-col gap-4 z-10">
        <video ref={video1ref} className="w-6/7 max-w-3xl h-auto" >
            <source src="./video/wheelover.mp4" type="video/mp4" />
                Your browser does not support the video tag.
        </video>
        

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
            </div>}
            {currentIndex < 1 && <div className="absolute right-32 bottom-16 z-2">
            <Button3D onclick={handleNext}>Next</Button3D>
            </div>}
            <div className="absolute left-[2%] bottom-[8%] z-2">
                <Button3D className="bg-green-400" onclick={()=>{navigate('/')}}>Home</Button3D>
        </div>
        <div className="absolute left-[2%] bottom-[2%] z-2">
                <Button3D className="bg-green-400" onclick={()=>{navigate('/list')}}>Index</Button3D>
        </div>
            
            
    </div>
  )
}
