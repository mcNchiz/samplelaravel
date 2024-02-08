import React from "react";
interface WelcomeProps { }
const Welcome: React.FC<WelcomeProps> = (props) => {
  return <>
    <div className="flex bg-black/90 items-center justify-center h-[100vh]">
      <div className="bg-indigo-500 p-20 tracking-tighter text-6xl rounded-2xl shadow-xl font-semibold text-white">
        <div className="text-lg tracking-normal text-center uppercase text-white/50 relative -bottom-1">Ubuntu server</div>
        <div className="relative -top-1">Laravel site</div>
      </div>
    </div>
  </>;
};
export default Welcome;