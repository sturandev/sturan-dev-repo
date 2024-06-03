<<<<<<< HEAD
<<<<<<< HEAD
"use client"
import { connectWeb3 } from "@/app/utils/web3";
import { useState } from "react";
=======
"use client";
import React, { useState } from 'react';
import { config, projectId } from '../../app/config';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { connectWeb3 } from '../../app/utils/web3';
>>>>>>> 9d044a39d50702357625529d6d4b3c812c1bc1b2
=======
"use client"
import { useState } from "react";
import { connectWeb3 } from "../../app/utils/web3";
>>>>>>> e040c0b79a24a13e857f2a7f0f2febf7ddccc5d0

const ConnectButton = () => {

    const[account, setAccount] = useState(null);

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
    <>
      <button
        onClick={handleConnect}
        disabled={!!account}
        className="font-bold p-2 text-color-primary border-[1px] border-color-primary border-opacity-15 hover:shadow-xl rounded-xl transition-all duration-300 ease-out"
      >
        {account ? `${account.slice(0, 6)}...` : "Connect"}
      </button>
    </>
  );
};
export default ConnectButton;