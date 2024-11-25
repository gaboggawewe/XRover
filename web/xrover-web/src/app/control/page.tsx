'use client';

import { sendMqttMessage } from '../../utils/mqttClient';

export default function ControlPage() {
  const handleMoveForward = () => {
    sendMqttMessage('nagani/control', 'forward');
  };

  const handleMoveBackward = () => {
    sendMqttMessage('nagani/control', 'backward');
  };

  const handleTurnLeft = () => {
    sendMqttMessage('nagani/control', 'left');
  };

  const handleTurnRight = () => {
    sendMqttMessage('nagani/control', 'right');
  };

  const handleStop = () => {
    sendMqttMessage('nagani/control', 'stop');
  };

  return (
    <div className="flex flex-col items-center h-full">
      <h1 className="text-4xl font-bold mb-8 text-left">Control the XRover</h1>
      <div className="flex justify-center  items-center flex-grow">
        <div className="p-4">
          <div className="grid grid-cols-3 gap-10 place-items-center">
            <button onClick={handleMoveForward} className="bg-blue-500 text-white text-xl px-12 py-8 rounded hover:bg-blue-700 col-start-2">
              Move Forward
            </button>
            <button onClick={handleTurnLeft} className="bg-blue-500 text-white text-xl px-12 py-8 rounded hover:bg-blue-700 col-start-1 row-start-2 -mr-4">
              Turn Left
            </button>
            <button onClick={handleStop} className="bg-red-500 text-white text-xl px-12 py-8 rounded hover:bg-red-700 col-start-2 row-start-2">
              Stop
            </button>
            <button onClick={handleTurnRight} className="bg-blue-500 text-white text-xl px-12 py-8 rounded hover:bg-blue-700 col-start-3 row-start-2 -ml-4">
              Turn Right
            </button>
            <button onClick={handleMoveBackward} className="bg-blue-500 text-white text-xl px-12 py-8 rounded hover:bg-blue-700 col-start-2 row-start-3">
              Move Backward
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}