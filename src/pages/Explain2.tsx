import { useNavigate } from "react-router-dom";
import { AnimatedButton } from "../components/AnimatedButton";
import { BackIcon } from "../icons/BackIcon";
import { PlayIcon } from "../icons/PlayIcon";

export function Explain2() {
    const navigate = useNavigate()
    return (
        <div className="flex bg-[#beefff] flex-col items-center justify-center text-center h-screen">
            <AnimatedButton icon={<BackIcon />} onclick={() => { navigate('/paralellIndexLines') }}  />
            <img src="./nl4.png" alt="radar" className="max-w-full h-1/2 object-contain my-5" />
            <div className="text-xl flex items-center text-center flex-col w-[85%] gap-4">
              <div className="text-blue-600">Draw a line on the PPI paralell to the planned track so that the perpendicular distance from the centre of the PPI to this line is equal to the CIR plotted on the chart</div>
              <AnimatedButton icon={<PlayIcon size={32} />} onclick={() => { navigate('/paralellIndexLines') }}  />
            </div>
        </div>
    )
}
