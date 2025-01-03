import { useNavigate } from "react-router-dom";
import { AnimatedButton } from "../components/AnimatedButton";
import { BackIcon } from "../icons/BackIcon";

export default function Symbol() {
    const navigate = useNavigate()
  return (
    <div>
        <AnimatedButton icon={<BackIcon/>} onclick={()=>{navigate('/paralellIndexLines')}}/>
        <div>symbol</div>
    </div>
  )
}
