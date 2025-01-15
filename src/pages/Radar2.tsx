import { useNavigate } from "react-router-dom";
import { AnimatedButton } from "../components/AnimatedButton";
import { BackIcon } from "../icons/BackIcon";
import Button3D from "../components/Button3d";
import { Arrow } from "../components/Arrow";


export function Radar2() {
    const navigate = useNavigate()
  return (
    <div className="h-screen bg-black w-full max-h-full relative bg-center bg-[url(/images/radar-final.jpeg)] font-rock2 bg-100 bg-no-repeat">     
        <AnimatedButton icon={<BackIcon/>} onclick={()=>{navigate('/map')}}/>
        
        <div className="absolute left-[13%] top-1/2 z-2">
          <Button3D onclick={()=>{navigate('/map2')}}>Parallel Index Line</Button3D>
        </div>
        <div className="absolute left-[24%] top-[42%] z-2">
            <Arrow color="text-white" rotation={-27} size={4}/>
        </div>
        <div className="absolute right-[9%] top-[30%] z-2">
          <Button3D>Clearing Ranges <br /> (NLT and NMT) </Button3D>
        </div>
        <div className="absolute right-[20%] top-[27%] z-2">
            <Arrow color="text-white" rotation={188} size={4}/>
        </div>
        <div className="absolute right-[19%] top-[30%] z-2">
            <Arrow color="text-white" rotation={157} size={4}/>
        </div>
        <div className="absolute right-[13%] top-[60%] z-2">
          <Button3D>Wheel Over PIL</Button3D>
        </div>
        <div className="absolute right-[23%] top-[59%] z-2">
            <Arrow color="text-white" rotation={167} size={4}/>
        </div>
        
        <div className="text-4xl font-bold text-white bg-blue-500 p-4 transform -translate-x-1/2 z-2 w-fit relative left-1/2 top-[84%]">Radar Display</div>
    </div>
  )
}
