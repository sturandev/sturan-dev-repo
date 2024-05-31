"use client"
import { connectWeb3 } from "@/app/utils/web3";
import { useState } from "react";

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
