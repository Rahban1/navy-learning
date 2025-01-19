import { useNavigate } from "react-router-dom"
import { AnimatedButton } from "../components/AnimatedButton"
import { BackIcon } from "../icons/BackIcon"
import Button3D from "../components/Button3d";
import { Arrow } from "../components/Arrow";
import ExitButton from "../components/ExitButton";

export function Map() {
    const navigate = useNavigate();
  return (
    <div className="relative overflow-hidden h-screen font-rock2 bg-cover bg-center bg-[url(/images/map.jpeg)] text-2xl">
        <AnimatedButton icon={<BackIcon/>} onclick={()=>{navigate(-1)}}/>
        <div className="absolute top-4 right-4">
          <ExitButton/>
        </div>
        <div className="absolute left-6 bottom-8 z-2">
          <div className="flex justify-center items-center gap-4">
            <Button3D className="bg-green-400 text-white border-b-4 border-green-700 hover:bg-green-500" onclick={()=>{navigate('/list')}}>Index</Button3D>
            <Button3D className="bg-green-400 text-white border-b-4 border-green-700 hover:bg-green-500" onclick={()=>{navigate('/')}}>Home</Button3D>
          </div>
        </div>
        
        <div className="absolute left-[16%] top-[25%] z-2">
                <Button3D onclick={()=>{navigate('/map2')}}>Parallel Index Line</Button3D>
        </div>
        <div className="absolute left-[28%] top-[21%] z-2">
            <Arrow rotation={-12} length={50} width={20} />
        </div>
        <div className="absolute left-[24%] top-[35%] z-2">
          <Button3D onclick={()=>{navigate('/map-cir')}}>Cross Index Range</Button3D>
        </div>
        <div className="absolute left-[36%] top-[31%] z-2">
            <Arrow rotation={-12} />
        </div>
        <div className="absolute right-[10%] top-[35%] z-2">
          <Button3D onclick={()=>{navigate('/map-wheelover')}}>Wheel Over CIR</Button3D>
        </div>
        <div className="absolute right-[20%] top-[37%] z-2">
            <Arrow rotation={140} />
        </div>
        <div className="absolute right-[25%] top-[15%] z-2">
          <Button3D onclick={()=>{navigate('/map-c-ranges')}}>Clearing Ranges</Button3D>
        </div>
        <div className="absolute right-[35%] top-[16%] z-2">
            <Arrow rotation={160} />
        </div>
        <div className="absolute right-[30%] top-[20%] z-2">
            <Arrow rotation={110} />
        </div>
        <div className="absolute right-[26%] top-[61%] z-2">
          <Button3D>Parallel Index Line <br /> For Next Course</Button3D>
        </div>
        <div className="absolute right-[24%] top-[52%] z-2">
            <Arrow rotation={-35}/>
        </div>
        <div className="text-4xl font-bold text-white bg-blue-500 p-4 transform -translate-x-1/2 z-2 w-fit relative left-1/2 top-[78%]">Chart Symbols</div>
        <div className="absolute right-[10%] top-[82%] z-2">
          <Button3D onclick={()=>{navigate('/radar2')}}>Radar Display</Button3D>
        </div>
    </div>
  )
}
