import { useNavigate } from "react-router-dom"
import { AnimatedButton } from "../components/AnimatedButton"
import { BackIcon } from "../icons/BackIcon"
import Button3D from "../components/Button3d";
import { Arrow } from "../components/Arrow";

export function Map() {
    const navigate = useNavigate();
  return (
    <div className="relative overflow-hidden h-screen font-rock2 bg-cover bg-center bg-[url(/images/map.jpeg)] text-2xl">
        <AnimatedButton icon={<BackIcon/>} onclick={()=>{navigate('/')}}/>
        <div className="absolute left-[16%] top-[25%] z-2">
                <Button3D onclick={()=>{navigate('/map2')}}>Parallel Index Line</Button3D>
        </div>
        <div className="absolute left-[28%] top-[21%] z-2">
            <Arrow rotation={-12} size={3}/>
        </div>
        <div className="absolute left-[24%] top-[35%] z-2">
          <Button3D onclick={()=>{navigate('/map-cir')}}>Cross Index Range</Button3D>
        </div>
        <div className="absolute left-[36%] top-[31%] z-2">
            <Arrow rotation={-12} size={3}/>
        </div>
        <div className="absolute right-[10%] top-[35%] z-2">
          <Button3D>Wheel Over CIR</Button3D>
        </div>
        <div className="absolute right-[20%] top-[37%] z-2">
            <Arrow rotation={140} size={3}/>
        </div>
        <div className="absolute right-[25%] top-[15%] z-2">
          <Button3D >Clearing Ranges</Button3D>
        </div>
        <div className="absolute right-[35%] top-[16%] z-2">
            <Arrow rotation={160} size={4}/>
        </div>
        <div className="absolute right-[30%] top-[20%] z-2">
            <Arrow rotation={110} size={4}/>
        </div>
        <div className="absolute right-[26%] top-[61%] z-2">
          <Button3D>Parallel Index Line <br /> For Next Course</Button3D>
        </div>
        <div className="absolute right-[24%] top-[52%] z-2">
            <Arrow rotation={-35} size={3}/>
        </div>
        <div className="text-4xl font-bold text-white bg-blue-500 p-4 transform -translate-x-1/2 z-2 w-fit relative left-1/2 top-[78%]">Chart Symbols</div>
        <div className="absolute right-[10%] top-[82%] z-2">
          <Button3D onclick={()=>{navigate('/radar2')}}>Radar Display</Button3D>
        </div>
    </div>
  )
}
