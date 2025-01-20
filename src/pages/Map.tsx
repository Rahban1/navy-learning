import { useNavigate } from "react-router-dom"
import { AnimatedButton } from "../components/AnimatedButton"
import { BackIcon } from "../icons/BackIcon"
import Button3D from "../components/Button3d";
import ExitButton from "../components/ExitButton";

export function Map() {
    const navigate = useNavigate();
  return (
    <div className="relative overflow-hidden h-screen  text-2xl">
        <img src="/images/mapog.png" className="absolute inset-0 w-full h-full " alt="Background" />
        <div className="absolute top-4 left-4 z-4">
          <AnimatedButton icon={<BackIcon/>} onclick={()=>{navigate(-1)}}/>
        </div>
        <div className="absolute top-4 right-4 z-4">
          <ExitButton/>
        </div>
        <div className="absolute left-6 bottom-8 z-2">
          <div className="flex justify-center items-center gap-4">
            <Button3D className="bg-green-400 text-white border-b-4 border-green-700 hover:bg-green-500" onclick={()=>{navigate('/list')}}>Index</Button3D>
            <Button3D className="bg-green-400 text-white border-b-4 border-green-700 hover:bg-green-500" onclick={()=>{navigate('/')}}>Home</Button3D>
          </div>
        </div>
        <div className="absolute left-[19vw] top-[14vw] z-2">
                <Button3D onclick={()=>{navigate('/map2')}}>Parallel Index Line</Button3D>
        </div>
        <div className="absolute left-[29vw] top-[20vw] z-2">
          <Button3D onclick={()=>{navigate('/map-cir')}}>Cross Index Range</Button3D>
        </div>
        <div className="absolute right-[15%] top-[38%] z-2">
          <Button3D onclick={()=>{navigate('/map-wheelover')}}>Wheel Over CIR</Button3D>
        </div>
        <div className="absolute right-[26%] top-[17%] z-2">
          <Button3D onclick={()=>{navigate('/map-c-ranges')}}>Clearing Ranges</Button3D>
        </div>
        <div className="absolute right-[30%] top-[57%] z-2">
          <Button3D>Parallel Index Line <br /> For Next Course</Button3D>
        </div>
        <div className="text-4xl font-bold text-white bg-blue-500 p-4 transform -translate-x-1/2 z-2 w-fit relative left-1/2 top-[78%]">Chart Symbols</div>
        <div className="absolute right-[10%] bottom-8 z-2">
          <Button3D onclick={()=>{navigate('/radar2')}}>Radar Display</Button3D>
        </div>
    </div>
  )
}
