import { useNavigate } from "react-router-dom";
import { AnimatedButton } from "../components/AnimatedButton";
import { BackIcon } from "../icons/BackIcon";
import { PlayIcon } from "../icons/PlayIcon";

export function Explain() {
    const navigate = useNavigate()
    return (
        <div className="flex bg-[#beefff] flex-col items-center justify-center text-center h-screen">
            <AnimatedButton icon={<BackIcon />} onclick={() => { navigate('/paralellIndexLines') }}  />
            <img src="./nl3.png" alt="radar" className="max-w-full h-1/2 object-contain my-5" />
            <div className="text-xl flex items-center text-center flex-col w-[85%] gap-4">
              <div className="text-blue-600">Draw a line parallel to the chosen track touching the edge of a radar conspicious object. This is known as <span className="underline">Parallel Index Line.</span> Measure the perpendicular distance between the parlell index line and the track drawn. This distance is known as the <span className="underline">Cross Index Range (CIR)</span></div>
              <AnimatedButton icon={<PlayIcon size={32} />} onclick={() => { navigate('/explain2') }}  />
            </div>
        </div>
    )
}
