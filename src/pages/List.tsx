import { useNavigate } from "react-router-dom";
import { AnimatedButton } from "../components/AnimatedButton";
import { ListItem } from "../components/ListItem";
import { BackIcon } from "../icons/BackIcon";
import ExitButton from "../components/ExitButton";

export  function List() {
    const navigate = useNavigate()
  return (
    <div className=" font-rock2 relative overflow-hidden  bg-[#BEEFFF] w-full h-screen flex justify-center items-center">
        <img src="/images/rad.jpeg" className="absolute inset-0 w-full h-full object-cover" alt="Background" />
        <div className="absolute top-4 right-4">
          <ExitButton/>
        </div>
        <div className="w-[80%] z-10 text-white">
            <AnimatedButton icon={<BackIcon/>} onclick={()=>{navigate(-1)}}/>
            <div className="text-6xl mb-8">BLIND PILOTAGE - INDEX</div>
            <ListItem text="Basics of Blind Pilotage" navigateTo="definition"/>
            <ListItem text="Chart Symbology" navigateTo="map"/>
            <ListItem text="Parallel Index Lines" navigateTo="map2"/>
            <ListItem text="Radar Clearing Ranges" navigateTo="map-c-ranges"/>
            <ListItem text="Wheel Over CIRs" navigateTo="map-wheelover"/>
            <ListItem text="Execution of Blind Pilotage" navigateTo="execution"/>
        </div>
            
        
    </div>
  )
}
