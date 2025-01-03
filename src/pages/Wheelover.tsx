import { useNavigate } from "react-router-dom";
import { AnimatedButton } from "../components/AnimatedButton";
import { BackIcon } from "../icons/BackIcon";

export  function Wheelover() {
    const navigate = useNavigate()
  return (
    <div>
        <AnimatedButton icon={<BackIcon/>} onclick={()=> {navigate('/list')}}/>
        <div>wheeloverCIR</div>
    </div>
  )
}
