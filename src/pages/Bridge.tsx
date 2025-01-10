import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';


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
        <div className="bg-blue-500 bg-opacity-75 text-white text-3xl font-bold font-rock2 z-4 absolute top-12 left-24 p-4 rounded-lg shadow-lg">Welcome to the bridge. Hover on the equipment/topic you would like to learn about</div>
        {/* <audio ref={audioRef} src='./bridgeAudio.mp3'/> */}
        <div 
            className=' w-32 h-16 z-20 absolute left-[38%] top-[34%]'
            onMouseEnter={()=>handleMouseEnter('Blind Pilotage')}
            onMouseLeave={handleMouseLeave}
            onClick={()=>{navigate('/radar')}}
            ></div>
        <div className="absolute left-[39%] top-[29%] bg-blue-500 rounded p-1 text-white z-2 text-xl font-rock2">Blind Pilotage</div>
        <div className="absolute left-[26%] top-[30%] bg-blue-500 rounded p-1 text-white z-2 text-xl font-rock2">ECDIS</div>
        <div className="absolute left-[3%] top-[36%] bg-blue-500 rounded p-1 -rotate-12 text-white z-2 text-xl font-rock2">Anchoring/ Ropework</div>
        <div className="absolute left-[48%] top-[41%] bg-blue-500 rounded p-1 text-white z-2 text-xl font-rock2">Propulsion</div>
        <div className="absolute left-[53%] top-[72%] bg-blue-500 rounded p-1 text-white z-2 text-xl font-rock2">Pelorus</div>
        <div className="absolute left-[54%] top-[76%] bg-blue-500 rounded p-1 text-white z-2 text-xl font-rock2">Gyro</div>
        <div className="absolute left-[52%] top-[80%] bg-blue-500 rounded p-1 text-white z-2 text-xl font-rock2">Magnetism</div>
        <div className="absolute left-[72%] top-[30%] bg-blue-500 rounded p-1 text-white z-2 text-xl font-rock2">Anti-Col</div>
        <div className="absolute left-[89%] top-[35%] bg-blue-500 rounded p-1 rotate-12 text-white z-2 text-xl font-rock2">Navigation Aids</div>

        <AnimatePresence>
        {hoveredItem && (
          <motion.div
            className="z-10 absolute left-[30rem] top-[10rem] w-[40rem] h-[30rem] bg-white shadow-lg p-4 rounded-lg overflow-hidden"
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.3, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            <img
              src="/images/radar-final.jpeg"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Background"
            />
            <h2 className="text-xl font-bold text-black">{hoveredItem}</h2>
            <motion.p
              className="z-20 text-white bg-blue-500 rounded p-2 font-bold text-xl font-rock2 absolute left-60 bottom-4 cursor-pointer"
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





