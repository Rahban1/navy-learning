import React from 'react';
import { exit } from '@tauri-apps/plugin-process';
// when using "withGlobalTauri": true, you may use
// const { exit, relaunch } = window._TAURI_.process;

// exits the app with the given status code

const ExitButton: React.FC = () => {
  const handleExit = async () => {
    await exit(0);
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