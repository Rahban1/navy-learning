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
    <div className='relative'>
        <img src="/bridge.jpeg" className="absolute inset-0 w-full h-full object-cover" alt="Background" />
        <div className="text-white text-3xl font-bold font-pirou z-4 absolute top-12 left-24">Welcome to the bridge. Hover on the equipment/topic you would like to learn about</div>
        <audio ref={audioRef} src='./bridgeAudio.mp3'/>
        <div 
            className=' w-32 h-20 z-20 absolute left-[35rem] top-[19rem]'
            onMouseEnter={()=>handleMouseEnter('Blind Pilotage')}
            onMouseLeave={handleMouseLeave}
            onClick={()=>{navigate('/list')}}
            ></div>
        <div className="absolute left-[36rem] top-[18rem] text-white z-2 text-xl">Blind Pilotage</div>
        <div className="absolute left-[24rem] top-[18rem] text-white z-2 text-xl">ECDIS</div>
        <div className="absolute left-[4rem] top-[21rem] -rotate-12 text-white z-2 text-xl">Anchoring/ Ropework</div>
        <div className="absolute left-[44rem] top-[23rem] text-white z-2 text-xl">Propulsion</div>
        <div className="absolute left-[58rem] top-[34rem] text-white z-2 text-xl">Pelorus</div>
        <div className="absolute left-[58rem] top-[36rem] text-white z-2 text-xl">Gyro</div>
        <div className="absolute left-[58rem] top-[38rem] text-white z-2 text-xl">Magnetism</div>
        <div className="absolute left-[66rem] top-[18rem] text-white z-2 text-xl">Anti-Col</div>
        <div className="absolute left-[82rem] top-[20rem] rotate-6 text-white z-2 text-xl">Navigation Aids</div>

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
              src="/radar.jpeg"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Background"
            />
            <h2 className="text-xl font-bold text-black">{hoveredItem}</h2>
            <motion.p
              className="z-20 text-white font-bold text-xl absolute left-24 bottom-4 cursor-pointer hover:text-blue-500 transition-colors duration-300"
              whileHover={{ scale: 1.1, color: "#3b82f6" }}
              onClick={() => navigate("/list")}
            >
              Click to continue.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>

  )
}




