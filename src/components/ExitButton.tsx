import React from 'react';
import { emit } from '@tauri-apps/api/event';

const ExitButton: React.FC = () => {
  const handleExit = async () => {
    await emit("app-exit"); // Emit a custom event to trigger backend exit
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