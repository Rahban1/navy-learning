import { useNavigate } from "react-router-dom";
import { PlayIcon } from "../icons/PlayIcon";
import { motion } from "framer-motion";

export function Home() {
    const navigate = useNavigate();
    return (
        <div className="w-full h-screen flex justify-center items-center bg-blue-200 relative">
            <img src="/final-cover.jpeg" className="absolute inset-0 w-full h-full object-cover" alt="Background" />
            <img src="/left-removebg.png" className="absolute top-2 left-2 w-16 h-28" alt="logo" />
            <img src="/right.jpeg" className="absolute top-2 right-2 w-28 h-28" alt="logo2" />
            <div className="absolute text-white text-2xl font-bold leading-loose tracking-wider font-rock left-6 bottom-8">
                <div className="underline">Syndicate Members :-</div>
                <div>Lt Cdr Rishabh Hooda</div>
                <div>Lt Cdr Anil Chaudhary</div>
                <div>Lt Cdr Shanu Kumar</div>
                <div>Lt Cdr Gaurav Kumar</div>
            </div>
            <div className="absolute bottom-20 font-bold leading-loose tracking-wider right-8 text-xl text-white font-rock">
                <div className="underline">Syndicate Mentor :-</div>
                <div>D/C Apoorva Sharma</div>
            </div>
            <div className="main z-10 flex flex-col items-center text-white ">
                <div className="text-6xl m-4 font-extrabold mb-6 font-pirou text-center">COMPUTER BASED TRAINING PACKAGE</div>
                <div className="text-6xl m-4 font-extrabold  font-pirou text-center">BLIND PILOTAGE</div>
                <motion.button 
                className="m-4 mt-8 font-bold font-pirou"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={()=> {navigate('/bridge')}}
                >
                    <PlayIcon size={76}/> START
                </motion.button>
            </div>
        </div>
    )
}
