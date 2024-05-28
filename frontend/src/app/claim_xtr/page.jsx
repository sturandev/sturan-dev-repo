"use client"
import Image from "next/image"
import { useState } from "react"

const Page = () => {
  const [isClaimed, setIsClaimed] = useState(false);

  const handleClick = () => {

    setIsClaimed(!isClaimed);

  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="border-2 border-color-gray border-opacity-15 rounded-xl p-24 custom-shadow">
        <div className="flex items-center justify-center w-40 h-40">
          {isClaimed ? (
            <Image src="/assets/kado-terbuka.png" height="100" width="100" alt="kado" />
          ) : (
            <Image src="/assets/kado-tertutup.png" height="100" width="100" alt="kado" />
          )}
        </div>
        <div className="mt-4 flex justify-center">
          <button onClick={handleClick} className="p-2 bg-color-primary rounded-xl hover:bg-opacity-70 transition duration-300">
            Claim XTR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;