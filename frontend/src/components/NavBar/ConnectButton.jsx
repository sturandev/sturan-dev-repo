"use client";
import React, { useState } from 'react';
import { connectWeb3 } from "@/app/utils/web3";
import Image from "next/image";
import Web3 from "web3";
import { config, projectId } from "@/app/config";
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';

const queryClient = new QueryClient();

if (!projectId) throw new Error('Project ID is not defined');
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true // Optional - false as default
});

const ConnectButton = ({ children, initialState }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [account, setAccount] = useState(null);

  const handleConnect = async () => {
    try {
      const web3Instance = await connectWeb3();
      const accounts = await web3Instance.eth.getAccounts();
      setAccount(accounts[0]);
    } catch (error) {
      console.error("Connection Failed", error);
    }
  };

  return (
    <div className="relative flex flex-col items-center">
    <button
      onClick={() => setIsOpen((prev) => !prev)}
      disabled={!!account}
      className="font-bold p-2 text-color-primary border-[1px] border-color-primary border-opacity-15 hover:shadow-xl rounded-xl transition-all duration-300 ease-out"
    >
      {account ? `${account.slice(0, 6)}...` : "Connect"}
    </button>
    {isOpen && (
      <div className="absolute top-16 flex flex-col items-center border-[2px] border-opacity-10 border-color-sky shadow-lg shadow-color-secondary rounded-xl w-52 h-auto p-4">
        <button onClick={handleConnect} className="mb-5">
          <h1 className='text-color-typography font-semibold'>Metamask</h1>
        </button>
        <button>
          <w3m-button />
        </button>
        <WagmiProvider config={config} initialState={initialState}>
          <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </WagmiProvider>
      </div>
    )}
  </div>
  );
};

export default ConnectButton;
