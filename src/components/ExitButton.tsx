import React from 'react';

interface ExitButtonProps {
  onExit: () => void; // Callback function to handle exit
}

const ExitButton: React.FC<ExitButtonProps> = ({ onExit }) => {
  const handleExit = async () => {
    onExit(); // Call the exit function passed as a prop
  };

  return (
    <button
      onClick={handleExit}
      className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
    >
      X
    </button>
  );
};

export default ExitButton;