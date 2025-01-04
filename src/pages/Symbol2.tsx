import { useNavigate } from "react-router-dom";
import { AnimatedButton } from "../components/AnimatedButton";
import { BackIcon } from "../icons/BackIcon";
import { PlayIcon } from "../icons/PlayIcon";

export function Symbol2() {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col items-center justify-center text-center h-screen">
            <AnimatedButton icon={<BackIcon />} onclick={() => { navigate('/paralellIndexLines') }}  />
            <div className="flex items-center justify-center h-screen bg-blue-100">
                <video className="w-4/5 max-w-3xl h-auto" controls>
                    <source src="./ml.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="flex items-center font-bold underline text-xl gap-4">
                <AnimatedButton icon={<PlayIcon size={32} />} onclick={() => { navigate('/symbol2') }}  />
            </div>
        </div>
    )
}
