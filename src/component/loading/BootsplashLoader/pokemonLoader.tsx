import Image from "next/image";
import React, { useEffect, useState } from "react";
import bg from "@/assets/pikachu.png"

const PokemonLoader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div
      className={`fixed z-20 inset-0 bg-white flex justify-center items-center ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-opacity duration-1000`}
    >
     
      <div className="animate-pulse flex flex-col items-center">
        <div className="w-40 h-40 bg-yellow-500 rounded-full flex justify-center items-center mb-4">
          <div className="w-30 h-30 bg-black rounded-full relative"><Image src={bg} fill alt="bg" /></div>
          
        </div>
        <p className="text-2xl text-black font-bold">Loading...</p>
      </div>
    </div>
  );
};

export default PokemonLoader;
