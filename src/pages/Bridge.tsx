import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Button3D from '../components/Button3d';



export function Bridge() {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleMouseEnter = (item: string) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const audioRef = useRef<HTMLAudioElement>(null);
  useEffect(()=>{
    const playAudio = async () => {
        try {
            await audioRef.current?.play();
        } catch(error){
            console.log("Failed to play audio");
            
        }
    }
    playAudio();
  },[])

  return (
    <div className='relative w-full h-screen overflow-hidden'>
        <img src="/images/bridge.jpeg" className="absolute inset-0 w-full h-full object-cover" alt="Background" />
        
        <div className="bg-blue-500 border-white border-2 bg-opacity-75 text-white text-3xl font-bold font-rock2 z-4 absolute top-12 left-[13%] p-4 rounded-lg shadow-lg">Welcome to the bridge. Hover on the equipment/topic you would like to learn about</div>
        {/* <audio ref={audioRef} src='./bridgeAudio.mp3'/> */}
        <div 
            className=' w-32 h-16 z-20 absolute left-[38%] top-[34%]'
            onMouseEnter={()=>handleMouseEnter('Blind Pilotage')}
            onMouseLeave={handleMouseLeave}
            onClick={()=>{navigate('/radar')}}
            ></div>
        <div className="absolute left-[38%] top-[29%] z-2">
          <Button3D>Blind Pilotage</Button3D>
        </div>
        <div className="absolute left-[26%] top-[30%] -rotate-6 z-2">
        <Button3D>ECDIS</Button3D></div>
        <div className="absolute left-[3%] top-[35%] -rotate-12  z-2 ">
        <Button3D>Anchoring/ Ropework</Button3D></div>
        <div className="absolute left-[48%] top-[40%] z-2 ">
        <Button3D>Propulsion</Button3D></div>
        <div className="absolute left-[50%] top-[72%] text-center z-2 ">
        <Button3D>Pelorus <br />Gyroscope <br />Magnetic Compass</Button3D>
        </div>
        <div className="absolute left-[72%] top-[29%] rotate-6 z-2 ">
        <Button3D>Anti-Col</Button3D></div>
        <div className="absolute left-[89%] top-[34%] rotate-12 z-2 ">
        <Button3D>Navigation Aids</Button3D></div>

        <AnimatePresence>
        {hoveredItem && (
          <motion.div
            className="z-10 absolute left-[30rem] top-[10rem] w-[35rem] h-[35rem] bg-black shadow-lg p-4 rounded-lg overflow-hidden"
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.3, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            <div className='flex justify-center items-center'>
              <img
                src="/images/radar-final.jpeg"
                className=" max-w-full  "
                alt="Background"
              />
            </div>
            <motion.p
              className="z-20 text-white bg-blue-600 rounded p-2 font-bold text-xl font-rock2 absolute left-[35%] bottom-4 cursor-pointer"
              whileHover={{ scale: 1.1, color: "#3b82f6" }}
              onClick={() => navigate("/radar")}
            >
              Click to continue.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>

  )
}





