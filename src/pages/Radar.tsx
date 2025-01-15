import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export function Radar() {
    const navigate = useNavigate()
  return (
    <div className="h-screen bg-black font-rock2 text-2xl">
        <img src="/images/radar-final.jpeg" className="absolute  max-w-full left-[22%] object-cover" alt="Background" />
        <div className="relative left-1/2 -translate-x-1/2 top-[80%] text-white w-fit px-24 rounded py-6 flex flex-col  items-center">
            <div className="bg-[#f8f2f230]  font-semibold rounded  px-4 py-2 mr-6">Select the topic </div>
            <div className="flex justify-center gap-10 items-center mt-6 ml-6">
                <motion.button 
                    className=" bg-[#f8f2f230]  px-4 py-2 rounded cursor-pointer"
                    onClick={()=>{navigate('/')}}
                >
                    Radar
                </motion.button>
                <motion.button 
                    className="bg-[#f8f2f230] px-4 py-2 rounded cursor-pointer "
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    onClick={()=>{navigate('/list')}}
                >
                    Blind Pilotage
                </motion.button>
            </div>
        </div>
    </div>
  )
}
