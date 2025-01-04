
import { AnimatedButton } from "../components/AnimatedButton";
import { BackIcon } from "../icons/BackIcon";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ListItem } from "../components/ListItem";

export function Demo() {
    const navigate = useNavigate()
    return (
        <div className="h-screen w-full bg-[#BEEFFF] flex flex-col justify-center items-center">
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}
            >
                <AnimatedButton icon={<BackIcon />} onclick={() => { navigate('/paralellIndexLines') }} />
            </motion.div>
            <div className="flex justify-center items-center h-screen">
                <div className="max-w-[80%] min-h-40 p-4 bg-white rounded-lg shadow-lg">
                    <div className="flex flex-col items-center">
                        <div className="font-bold text-3xl text-center my-4 uppercase text-blue-600">Why have a parallel Index Line</div>
                        <div className="text-xl text-center mb-4">Having a Parallel Index Line on a PPI provides real-time information on the ships lateral position relative to the planned track.</div>
                        <div className="text-xl text-center text-blue-400">What it means is that at any given instant you can tell whether your ship is port or starboard of the planned track and also by how much</div>
                        <ListItem text="Get on with the demo" navigateTo="demo2"/>
                    </div>

                </div>
            </div>
        </div>
    )
}
