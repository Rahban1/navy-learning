import { useNavigate } from "react-router-dom";
import { AnimatedButton } from "../components/AnimatedButton";
import { BackIcon } from "../icons/BackIcon";

export  function Rcr() {
    const navigate = useNavigate()
  return (
    <div>
        <AnimatedButton icon={<BackIcon/>} onclick={()=> {navigate('/list')}}/>
        <div>rcr</div>
    </div>
  )
}
