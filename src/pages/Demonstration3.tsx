import { useNavigate } from "react-router-dom";
import { AnimatedButton } from "../components/AnimatedButton";
import { BackIcon } from "../icons/BackIcon";
import { useRef, useState } from "react";
import { motion } from 'framer-motion'
import Button3D from "../components/Button3d";

export function Demonstration3() {
    const [currentIndex,setCurrentIndex] = useState(0);
    const [step, setStep] = useState(0);
    const video1ref = useRef<HTMLVideoElement>(null);
    const items = [
       "Two additional PIL are placed on the radar display at 1.5c and 3.1c as NLT and NMT respectively."
    ]
    const items2 = [
        "As the ship begins to move to port, the PIL at 1.5c starts to close the ICTT edge.",
        "When the ICTT edge is about to touch the PIL at 1.5c, it indicates that the ship is on LDL and any further to port will enter into dangerous waters.",
        "As the ship alters to starboard, the PIL at 2.7c begins to close the ICTT edge thereby indicating the ship regaining track. This is followed by ship beginning to go off track to starboard upto the LDL which is indicated by the PIL at 3.1c touching the ICTT edge."
        ]
    const navigate = useNavigate()
    const handleNext = ()=>{
        setCurrentIndex(currentIndex + 1)
        if(currentIndex == 0){
            video1ref.current?.play();
            const timer1 = setTimeout(()=>{
                setStep(1);
            },2000)
            const timer2 = setTimeout(()=>{
                setStep(2);
            },35000)
            const timer3 = setTimeout(()=>{
                setStep(3);
            },54000)
            
            

            return(()=>{
                clearTimeout(timer1)
                clearTimeout(timer2);
                clearTimeout(timer3);
            })
            
        }
    }
  return (

    <div className="relative h-screen font-rock2 bg-cover bg-center bg-[url(/images/rad.jpeg)]">
        
        <AnimatedButton icon={<BackIcon/>} onclick={()=>{navigate(-1)}}/>
        <div className="w-1/2 absolute left-[5%] top-[30%] flex flex-col gap-4 z-10">
        <video ref={video1ref} className="w-6/7 max-w-3xl h-auto" >
            <source src="./video/clearingRanges.mp4" type="video/mp4" />
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
            {currentIndex < 1 && <motion.button 
                onClick={handleNext}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute right-32 bottom-16 mt-4 bg-blue-500 text-white py-2 px-4 text-2xl rounded"
            >Next</motion.button>}
            <div className="absolute left-[2%] bottom-[8%] z-2">
                <Button3D className="bg-green-400" onclick={()=>{navigate('/')}}>Home</Button3D>
        </div>
        <div className="absolute left-[2%] bottom-[2%] z-2">
                <Button3D className="bg-green-400" onclick={()=>{navigate('/list')}}>Index</Button3D>
        </div>
            
            
    </div>
  )
}
