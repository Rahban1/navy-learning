import { useNavigate } from "react-router-dom"
import { AnimatedButton } from "../components/AnimatedButton"
import { BackIcon } from "../icons/BackIcon"
import { MapTopics } from "../components/MapTopics";

export function Map() {
    const navigate = useNavigate();
  return (
    <div className="relative overflow-hidden h-screen font-rock2 bg-cover bg-center bg-[url(/images/map.jpeg)] text-2xl">
        <AnimatedButton icon={<BackIcon/>} onclick={()=>{navigate('/')}}/>
        <div className="absolute top-[25%] left-[16%]">
            <MapTopics text="Paralell Index Line"/>
        </div>
        <div className="absolute top-[34%] left-[25%]">
            <MapTopics text="Cross Index Range"/>
        </div>
        <div className="absolute top-[34%] right-[10%]">
            <MapTopics text="Wheel Over CIR"/>
        </div>
        <div className="absolute top-[16%] right-[19%]">
            <MapTopics text="Clearing Ranges" secondText="(NLT and NMT)"/>
        </div>
        <div className="absolute right-[25%] top-[60%]">
            <MapTopics text="Parallel Index Line" secondText="For Next Course"/>
        </div>
        <div className="text-4xl font-bold text-white bg-blue-500 p-4 transform -translate-x-1/2 z-2 w-fit relative left-1/2 top-[78%]">Chart Symbols</div>
    </div>
  )
}
