"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, use } from "react";
import { connectWeb3 } from "@/app/utils/web3";
import CardSubmit from "@/components/CardSubmit";
import DataContributor from "@/app/dataContributor/page";

const Page = () => {
  const [account, setAccount] = useState(null);
  const [showCardSubmit, setShowCardSubmit] = useState(false);

  useEffect(() => {
    const checkConnection = async () => {
      try {
        const web3Instance = await connectWeb3();
        const accounts = await web3Instance.eth.getAccounts();
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        }
      } catch (error) {
        console.error("Error checking connection", error);
      }
    };

    checkConnection();
  }, []);

  const handleConnect = async () => {
    try {
      const web3Instance = await connectWeb3();
      const accounts = await web3Instance.eth.getAccounts();
      setAccount(accounts[0]);
    } catch (error) {
      console.error("Connection Failed", error);
    }
  };

  const handleTakePartClick = async () => {
    if (!account) {
      await handleConnect();
    }
    if (account) {
      setShowCardSubmit(true);
    }
  };

  const handleCloseCardSubmit = () => {
    setShowCardSubmit(false);
  };

  return (
    <div className={`bg-color-primary bg-opacity-10 ${showCardSubmit ? 'blur-background' : ''}`}>
      <div className="p-24">
        <div className="p-10 border-t-[2px] border-x-[2px] border-color-gray border-opacity-15 rounded-t-lg grid grid-cols-2">
          <Image
            alt="dummy nft"
            src="/assets/dummy foto.png"
            height="300"
            width="300"
            className=""
          />
          <div className="-ml-24">
            <h1 className="font-bold text-2xl">Aloa Games</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni,
              quae voluptate fugit obcaecati rem sapiente at quia eaque. Aliquam
              delectus unde eos officiis cum velit quos dolore amet qui
              voluptate!
            </p>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="mx-11">
          <h1>Detail projects</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="mt-6">
            <Link href="#" onClick={handleTakePartClick} className="p-3  bg-color-primary rounded-full hover:bg-opacity-50 transition-all ease-linear">Take Part</Link>
          </div>
        </div>
      </div>
      {showCardSubmit && <CardSubmit onClose={handleCloseCardSubmit} />}
      <DataContributor />
    </div>
  );
};

export default Page;
