import { useNavigate } from "react-router-dom";
import { AnimatedButton } from "../components/AnimatedButton";
import { BackIcon } from "../icons/BackIcon";
import { useRef, useState } from "react";
import { motion } from 'framer-motion'

export  function Demonstration() {
    const [currentIndex,setCurrentIndex] = useState(0);
    const [step, setStep] = useState(0);
    const video1ref = useRef<HTMLVideoElement>(null);
    const video2ref = useRef<HTMLVideoElement>(null);
    const items = [
        "In this demonstration we will see how the PIL gives an indication of the ship being on track or off track on the radar display.",
        "As you saw on the chart display earlier, that the PIL at ICTT berth edge is at a distance of 2.7c which is the CIR (Port).",
        "The ship begins to move along the track and the blind safety officer uses the PIL feature of the radar to set a PIL parallel to course 078 ½ at a distance of 2.7c (0.27Nm).",
        "The ICTT edge touches the PIL when the ship proceeds on track on course 078 ½."]
    const items2 = [
        "(00:13 till 00:44) As the ship begins to go off track to port the ICTT berth comes closer to the ship on the radar display and crosses the PIL set at 2.7c thus giving an indication to the blind safety officer that the ship is off track to port.",
        "(00:45 till 01:13)) Similarly, as the ship starts to regain track the ICTT berth starts moving back to the original position which is touching the PIL.",
        "(01:14 till end)Subsequently as the ship moves starboard of track, ICTT berth edge moves farther away from the PIL and thus gives an indication that the ship is off track to starboard."]
    const navigate = useNavigate()
    const handleNext = ()=>{
        setCurrentIndex(currentIndex + 1)
        if(currentIndex == 3){
            video1ref.current?.play();
            video2ref.current?.play();
            const timer1 = setTimeout(()=>{
                setStep(step + 1);
            },12000)
            const timer2 = setTimeout(()=>{
                setStep(step + 1);
            },44000)
            const timer3 = setTimeout(()=>{
                setStep(step + 1);
            },73000)
            clearTimeout(timer1)
            clearTimeout(timer2);
            clearTimeout(timer3);
        }
    }
  return (

    <div className="relative h-screen font-rock2 bg-cover bg-center bg-[url(/images/rad.jpeg)]">
        
        <AnimatedButton icon={<BackIcon/>} onclick={()=>{navigate('/list')}}/>
        <div className="w-1/2 absolute left-[5%] top-[5%] flex flex-col gap-4 z-10">
        <video ref={video1ref} className="w-6/7 max-w-3xl h-auto" >
            <source src="./video/map1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
        </video>
        <video ref={video2ref} className="w-6/7 max-w-3xl h-auto" >
            <source src="./video/radar1.mp4" type="video/mp4" />
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
            {currentIndex < 5 && <motion.button 
                onClick={handleNext}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute right-32 bottom-16 mt-4 bg-blue-500 text-white py-2 px-4 text-2xl rounded"
            >Next {currentIndex}</motion.button>}
            
            
    </div>
  )
}

// import React, { useState, useEffect, useRef } from "react";

// const VideoTextApp = () => {
//   const [step, setStep] = useState(0); // To control what is displayed
//   const video1Ref = useRef(null);
//   const video2Ref = useRef(null);

//   useEffect(() => {
//     // Show the initial text
//     const timer1 = setTimeout(() => setStep(1), 3000); // After 3 seconds, show more text

//     // Start videos
//     const timer2 = setTimeout(() => {
//       setStep(2); // Move to video section
//       video1Ref.current.play();
//       video2Ref.current.play();
//     }, 6000); // After 6 seconds, start videos

//     // Show additional text at 13 seconds into the video
//     const timer3 = setTimeout(() => setStep(3), 13000); // After 13 seconds, show final text

//     // Clean up the timers
//     return () => {
//       clearTimeout(timer1);
//       clearTimeout(timer2);
//       clearTimeout(timer3);
//     };
//   }, []);

//   return (
//     <div>
//       {/* Text sections */}
//       {step === 0 && <p>Initial text appearing first...</p>}
//       {step === 1 && <p>Additional text appears after initial text...</p>}
//       {step >= 2 && (
//         <div>
//           {/* Videos */}
//           <video
//             ref={video1Ref}
//             src="video1.mp4"
//             width="400"
//             muted
//             style={{ marginRight: "10px" }}
//           />
//           <video ref={video2Ref} src="video2.mp4" width="400" muted />
//         </div>
//       )}
//       {step === 3 && <p>Text displayed from 13s to 44s...</p>}
//     </div>
//   );
// };

// export default VideoTextApp;