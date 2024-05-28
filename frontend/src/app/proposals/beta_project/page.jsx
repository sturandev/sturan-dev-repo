"use client"
import Image from "next/image";
import Alert from "@/components/Alert";
import { useState } from "react";

const Page = () => {
  const[showAlert, setShowAlert] = useState(false);
  const handleShowAlert = () => {
    setShowAlert(true);
  }

  return (
    <div className={`bg-color-primary bg-opacity-10 `}>
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
            <h1 className="font-bold text-2xl">Beta Projects</h1>
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
          <div className="mt-4">
            <button href="#" onClick={handleShowAlert} className="p-3 bg-color-primary rounded-full hover:bg-opacity-50 transition-all ease-linear">Take Part</button>
          </div>
        </div>
      </div>
      {showAlert && (
              <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-black bg-opacity-50 absolute inset-0"></div>
          <div className="relative bg-white p-4 rounded-lg">
            <Alert />
          </div>
        </div>
    )}
    </div>
  );
};

export default Page;
