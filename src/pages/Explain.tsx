import { useNavigate } from "react-router-dom";
import { AnimatedButton } from "../components/AnimatedButton";
import { BackIcon } from "../icons/BackIcon";

export function Explain() {
    const navigate = useNavigate()
  return (
    <div>
        <AnimatedButton icon={<BackIcon/>} onclick={()=>{navigate('/paralellIndexLines')}}/>
        <div>explain</div>
    </div>
  )
}
