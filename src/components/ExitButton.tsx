import React from 'react';
import { getCurrent } from '@tauri-apps/api/window';

const ExitButton: React.FC = () => {
  const handleExit = async () => {
    const currentWindow = getCurrent(); // Get the current window
    await currentWindow.close(); // Close the current window
  };

  return (
    <button
      onClick={handleExit}
      className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
    >
      Exit Application
    </button>
  );
};

export default ExitButton;