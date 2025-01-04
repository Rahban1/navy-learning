import { useNavigate } from "react-router-dom";
import { AnimatedButton } from "../components/AnimatedButton";
import { BackIcon } from "../icons/BackIcon";
import { PlayIcon } from "../icons/PlayIcon";

export function Demo2() {
    const navigate = useNavigate()
    return (
        <div className="flex bg-[#beefff] flex-col items-center justify-center text-center h-screen">
            <AnimatedButton icon={<BackIcon />} onclick={() => { navigate('/paralellIndexLines') }}  />
            <iframe src="./ml.mp4"></iframe>
            <AnimatedButton icon={<PlayIcon size={32} />} onclick={() => { navigate('/paralellIndexLines') }}  />
        </div>
    )
}
