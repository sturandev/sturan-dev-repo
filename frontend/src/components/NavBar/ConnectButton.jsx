"use client";
import React, { useState } from 'react';
import { config, projectId } from '../../app/config';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { connectWeb3 } from '../../app/utils/web3';

const queryClient = new QueryClient();

if (!projectId) throw new Error('Project ID is not defined');
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  themeVariables:{
    '--w3m-accent' : "#41C9E2"
  }
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
      className="font-bold p-2 transition-all duration-300 ease-out"
    >
      {account ? `${account.slice(0, 6)}...` : <w3m-button />}
        <WagmiProvider config={config} initialState={initialState}>
          <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </WagmiProvider>
    </button>
  </div>
  );
};

export default ConnectButton;
