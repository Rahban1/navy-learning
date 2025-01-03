import { useNavigate } from "react-router-dom"
import { AnimatedButton } from "../components/AnimatedButton"
import { BackIcon } from "../icons/BackIcon"
import { ListItem } from "../components/ListItem"
import { motion } from "framer-motion"

export function Accuracy() {
    const navigate = useNavigate()
    return (
        <div className="h-screen w-full bg-[#BEEFFF] flex flex-col justify-center items-center">
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}
            >
                <AnimatedButton icon={<BackIcon />} onclick={() => { navigate('/howisthisdone') }}  />
            </motion.div>
            <div className="flex justify-center items-center h-screen">
                <div className="max-w-[80%] min-h-40 p-4 bg-white rounded-lg shadow-lg">
                    <div className="flex flex-col items-center">
                        <div className="font-bold text-3xl text-center my-4 text-blue-600">ACCURACY</div>
                        <div className="text-xl text-center mb-4 text-[#007BFF]">The accuracy of Blind Pilotage is such that the ship can be taken to an open anchorage and anchored to within <span className="font-semibold">50 yards</span> of the desired position.</div>
                        <div className="text-xl text-center text-[#0056b3]">However, the degree of risks involved must be carefully assessed before embarking on a passage relying totally on Blind Pilotage in conditions of poor visibility.</div>
                        <ListItem text="Factors that need to be borne in mind" navigateTo="factors" />
                    </div>
                </div>
            </div>
        </div>
    )
}