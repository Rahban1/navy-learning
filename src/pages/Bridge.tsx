import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Button3D from '../components/Button3d';
import { AnimatedButton } from '../components/AnimatedButton';
import { BackIcon } from '../icons/BackIcon';
import ExitButton from '../components/ExitButton';


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
    <div className='overflow-hidden relative w-full h-screen'>
        <img src="/images/bridge.jpeg" className="absolute inset-0 w-full h-full " alt="Background" />
      <div className="absolute top-[2vw] right-[2vw]">
          <ExitButton/>
        </div>
      <div className='absolute left-[2vw] top-[2vw]'>
        <AnimatedButton icon={<BackIcon/>} onclick={()=>{navigate('/')}}/>
      </div>
      <div className="bg-blue-500 border-white border-2 bg-opacity-75 text-white text-3xl font-bold font-rock2 z-4 absolute top-12 left-1/2 transform -translate-x-1/2 p-4 rounded-lg shadow-lg">Welcome to the bridge. Hover on the equipment/topic you would like to learn about</div>
      <audio ref={audioRef} src='./audio/AudioBridge.mp3'/>
      <div 
          className=' w-36 h-20 z-20 absolute left-[39vw] top-[19vw]'
          onMouseEnter={()=>handleMouseEnter('Blind Pilotage')}
          onMouseLeave={handleMouseLeave}
          onClick={()=>{navigate('/list')}}
          ></div>
      <div className="absolute left-[40vw] top-[18vw] z-2">
        <Button3D>Blind Pilotage</Button3D>
      </div>
      <div className="absolute left-[28vw] top-[19vw] -rotate-6 z-2">
      <Button3D>ECDIS</Button3D></div>
      <div className="absolute left-[7vw] top-[22vw] -rotate-12  z-2 ">
      <Button3D>Anchoring/ Ropework</Button3D></div>
      <div className="absolute left-[48vw] top-[25vw] z-2 ">
      <Button3D>Propulsion</Button3D></div>
      <div className="absolute left-[50%] top-[72%] text-center z-2 ">
      <Button3D>Pelorus <br />Gyroscope <br />Magnetic Compass</Button3D>
      </div>
      <div className="absolute left-[71vw] top-[18vw] rotate-6 z-2 ">
      <Button3D>Anti-Col</Button3D></div>
      <div className="absolute left-[87vw] top-[21vw] rotate-12 z-2 ">
      <Button3D>Navigation Aids</Button3D></div>

      <AnimatePresence>
      {hoveredItem && (
        <motion.div
          className="z-10 absolute left-[30rem] top-[14rem] w-[18rem] h-[18rem] bg-black shadow-lg p-4 rounded-lg overflow-hidden"
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
            className="z-20 flex justify-center items-center text-white bg-blue-600 rounded p-2 font-bold text-lg font-rock2 absolute left-[37%] bottom-4 cursor-pointer"
            whileHover={{ scale: 1.1, color: "#3b82f6" }}
            onClick={() => navigate("/list")}
          >
            <div>Continue</div>
          </motion.p>
        </motion.div>
      )}
      </AnimatePresence>
    </div>

  )
}





