import { useNavigate } from "react-router-dom";
import { AnimatedButton } from "../components/AnimatedButton";
import { BackIcon } from "../icons/BackIcon";
import Button3D from "../components/Button3d";


export function Radar2() {
    const navigate = useNavigate()
  return (
    <div className="h-screen overflow-hidden bg-black w-full max-h-full relative bg-center bg-[url(/images/rf.png)] font-rock2 bg-100 bg-no-repeat">     
        <AnimatedButton icon={<BackIcon/>} onclick={()=>{navigate('/map')}}/>
        
        <div className="absolute left-[16%] top-1/2 z-2">
          <Button3D onclick={()=>{navigate('/map2')}}>Parallel Index Line</Button3D>
        </div>
        <div className="absolute left-6 bottom-8 z-2">
          <div className="flex justify-center items-center gap-4">
            <Button3D className="bg-green-400 text-white border-b-4 border-green-700 hover:bg-green-500" onclick={()=>{navigate('/list')}}>Index</Button3D>
            <Button3D className="bg-green-400 text-white border-b-4 border-green-700 hover:bg-green-500" onclick={()=>{navigate('/')}}>Home</Button3D>
          </div>
        </div>
        <div className="absolute right-[13%] top-[32%] z-2">
          <Button3D onclick={()=>{navigate('/map-c-ranges')}}>Clearing Ranges <br /> (NLT and NMT) </Button3D>
        </div>
        
        <div className="absolute right-[13%] top-[56%] z-2">
          <Button3D onclick={()=>{navigate('/map-wheelover')}}>Wheel Over PIL</Button3D>
        </div>
        
        
        <div className="text-4xl font-bold text-white bg-blue-500 p-4 transform -translate-x-1/2 z-2 w-fit relative left-1/2 top-[84%]">Radar Display</div>
    </div>
  )
}
