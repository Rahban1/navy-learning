import { useNavigate } from "react-router-dom";
import { AnimatedButton } from "../components/AnimatedButton";
import { BackIcon } from "../icons/BackIcon";
import { ListItem } from "../components/ListItem";
import { motion } from "framer-motion";

export function Definition() {
    const navigate = useNavigate()
    return (
        <div className="h-screen w-full bg-[#BEEFFF] flex flex-col justify-center items-center">
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}
            >
                <AnimatedButton icon={<BackIcon />} onclick={() => { navigate('/list') }} />
            </motion.div>
            <div className="flex justify-center items-center h-screen">
                <div className="max-w-[80%] min-h-40 p-4 bg-white rounded-lg shadow-lg">
                    <div className="flex flex-col items-center">
                        <div className="font-bold text-3xl text-center my-4 text-blue-600">DEFINITION</div>
                        <div className="text-xl text-center">Blind Pilotage means the navigating of the ship through restricted waters in low visibility with little or no recourse to the visual observation of objects outside the ship</div>
                        <div className="flex justify-center">
                            <ListItem text="How is this done" navigateTo="howisthisdone" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
