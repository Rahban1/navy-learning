import { useNavigate } from "react-router-dom";
import { AnimatedButton } from "../components/AnimatedButton";
import { BackIcon } from "../icons/BackIcon";
import { PlayIcon } from "../icons/PlayIcon";

export function Symbol2() {
    const navigate = useNavigate()
    return (
        <div className="flex bg-[#beefff] flex-col items-center justify-center text-center h-screen">
            <AnimatedButton icon={<BackIcon />} onclick={() => { navigate('/symbol') }}  />
            <img src="./nl2.png" alt="radar" className="max-w-full h-3/4 object-contain my-5" />
            <div className="flex items-center font-bold underline text-xl gap-4">
                SYMBOLS ON RADAR PPI
                <AnimatedButton icon={<PlayIcon size={32} />} onclick={() => { navigate('/paralellIndexLines') }}  />
            </div>
        </div>
    )
}
