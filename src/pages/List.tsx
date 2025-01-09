import { useNavigate } from "react-router-dom";
import { AnimatedButton } from "../components/AnimatedButton";
import { ListItem } from "../components/ListItem";
import { BackIcon } from "../icons/BackIcon";

export  function List() {
    const navigate = useNavigate()
  return (
    <div className=" font-rock2 relative overflow-hidden  bg-[#BEEFFF] w-full h-screen flex justify-center items-center">
        <img src="/images/rad.jpeg" className="absolute inset-0 w-full h-full object-cover" alt="Background" />
        <img src="/images/left-removebg.png" className="absolute top-2 left-2 w-16 h-28" alt="logo" />
        <img src="/images/right.jpeg" className="absolute top-2 right-2 w-28 h-28" alt="logo2" />
        <div className="w-[80%] z-10 text-white">
            <AnimatedButton icon={<BackIcon/>} onclick={()=>{navigate('/')}}/>
            <div className="text-6xl mb-8">BLIND PILOTAGE - INDEX</div>
            <ListItem text="Basics of Blind Pilotage" navigateTo="definition"/>
            <ListItem text="Chart Symbology" navigateTo="map"/>
            <ListItem text="Parallel Index Lines" navigateTo="RadarClearingRanges"/>
            <ListItem text="Radar Clearing Ranges" navigateTo="wheelover"/>
            <ListItem text="Wheel Over CIRs" navigateTo="anchoring"/>
            <ListItem text="Execution of Blind Pilotage" navigateTo="anchoring"/>
        </div>
            
        
    </div>
  )
}
