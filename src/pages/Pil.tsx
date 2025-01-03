import { useNavigate } from "react-router-dom";
import { AnimatedButton } from "../components/AnimatedButton";
import { ListItem } from "../components/ListItem";
import { BackIcon } from "../icons/BackIcon";

export  function Pil() {
    const navigate = useNavigate()
  return (
    <div className="relative overflow-hidden font-rock bg-[#BEEFFF] w-full h-screen flex justify-center items-center">
        <iframe src="https://giphy.com/embed/3oz8xRQiRlaS1XwnPW" width="480" height="360" className="giphy-embed absolute top-0 left-0 w-full h-full pointer-events-none " allowFullScreen></iframe>
        
        <div className="w-[80%] z-10">
            <AnimatedButton icon={<BackIcon/>} onclick={()=>{navigate('/list')}}/>
            <div className="text-4xl mb-8">PARALELL INDEX TECHNIQUE</div>
            <ListItem text="What Are The Symbols Used" navigateTo="symbol"/>
            <ListItem text="Explain to Me on Chart and Radar" navigateTo="explain"/>
            <ListItem text="Show Me With a Demonstration" navigateTo="demo"/>
        </div>
            
        
    </div>
  )
}
