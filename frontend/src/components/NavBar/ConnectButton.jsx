"use client"
import { useState } from "react";
import { connectWeb3 } from "@/app/utils/web3";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi";
import { sepolia } from "viem/chains";
import Image from "next/image";

const ConnectButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [account, setAccount] = useState(null);

  const handleConnect = async () => {
    try {
        const web3Instance = await connectWeb3();
        const accounts = await web3Instance.eth.getAccounts();
        setAccount(accounts[0])
    } catch (error) {
        console.error("Connection Failed", error);
    }
}

  return (
    <div className="relative flex flex-col items-center w-[40px] h-[40px]">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        disabled={!!account}
        className="font-bold p-2 text-color-primary border-[1px] border-color-primary border-opacity-15 hover:shadow-xl rounded-xl transition-all duration-300 ease-out"
      >
        {account ? `${account.slice(0,6)}...` : "Connect"}
      </button>
      {isOpen && (
        <div className="absolute top-16 flex justify-between border-[2px] border-opacity-10 border-color-sky shadow-lg shadow-color-secondary rounded-xl w-52 h-20 p-4">
          <button onClick={handleConnect}>
            <Image src="/assets/Metamask-icon.png" height="50" width="50" />
          </button>
          <button>
            <Image src="/assets/Icon.png" height="50" width="50" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ConnectButton;