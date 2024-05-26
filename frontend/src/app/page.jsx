import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import Participate from "./proposals/page";

const Page = () => {
  return (
    <>
      <div className="bg-color-primary bg-opacity-10 h-[1000px] grid grid-cols-10 gap-4">
        <div className="col-span-2 border-[1px] p-3 rounded-lg border-color-gray ml-20 mt-10 -mr-16 border-opacity-10 h-[400px]">
          <Image src="/assets/XTR-Logo.png" width="50" height="50" className="mt-3 ml-3" />
          <p className="font-bold ml-4 mt-2 text-xl">STURAN</p>
          <p className="font-semibold ml-4 mt-1">100 Partners</p>
          <button className="mt-1 flex justify-center p-2 text-color-white bg-color-typography rounded-full w-full hover:bg-opacity-90 transition-all duration-300">Join Partners</button>
          <div className="flex-col mt-4 space-y-2 font-semibold">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Proposals</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Knowledge</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">About XTR</button>
          </div>
          <SocialIcon url="https://x.com/singgih_tara" style={{ height: 30, width: 30 }} className="mt-4 ml-4" />
          <SocialIcon url="https://discord.com/singgih_tara" style={{ height: 30, width: 30 }} bgColor="#000" className="mt-4 ml-4" />
          <SocialIcon url="https://github.com/sturan-Dev" style={{ height: 30, width: 30 }} className="mt-4 ml-4" />
        </div>
        <Participate/>
      </div>
    </>
  );
};

export default Page;
