import { useNavigate } from "react-router-dom";
import { AnimatedButton } from "../components/AnimatedButton";
import { BackIcon } from "../icons/BackIcon";
import { PlayIcon } from "../icons/PlayIcon";

export function Symbol() {
    const navigate = useNavigate()
    return (
        <div className="flex bg-[#beefff] flex-col items-center justify-center text-center h-screen">
            <AnimatedButton icon={<BackIcon />} onclick={() => { navigate('/paralellIndexLines') }}  />
            <img src="./nl.png" alt="radar" className="max-w-full h-3/4 object-contain my-5" />
            <div className="text-xl underline font-bold flex items-center gap-4">
              CHART SYMBOLS
              <AnimatedButton icon={<PlayIcon size={32} />} onclick={() => { navigate('/symbol2') }}  />
            </div>
        </div>
    )
}
