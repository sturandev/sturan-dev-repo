import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import Participate from "./proposals/proposals";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <div className="bg-color-primary bg-opacity-10 h-[1200px] grid grid-cols-10 gap-4">
        <div className="col-span-2 border-[1px] p-3 rounded-lg border-color-gray ml-20 mt-10 -mr-16 border-opacity-10 h-[400px]">
          <Image src="/assets/XTR-Logo.png" alt="xtr logo" width="50" height="50" className="mt-3 ml-3" />
          <p className="font-bold ml-4 mt-2 text-xl">STURAN</p>
          <p className="font-semibold ml-4 mt-1">100 Partners</p>
          <Link href="/" className="mt-1 flex justify-center p-2 text-color-white bg-color-typography rounded-full w-full hover:bg-opacity-90 transition-all duration-300">Join Partners</Link>
          <div className="mt-4 space-y-2 font-semibold flex flex-col">
            <div className="ml-[3px] py-2 relative overflow-hidden cursor-pointer">
              <div className="border-b-[2px] ml-[10px]">
                <span>Proposals</span>
                <span className="line"></span>
              </div>
            </div>
            <Link href="/claim_xtr" className="px-4 py-2 relative overflow-hidden">
              <span>Claim XTR</span>
              <span className="line"></span>
            </Link>
            <Link href="https://github.com/Sturan-Dev/WhitePaper" target="blank" className="px-4 py-2 relative overflow-hidden">
              <span>About XTR</span>
              <span className="line"></span>
            </Link>
          </div>
          <div className="mt-4 flex ml-4 space-x-4">
            <SocialIcon target="blank" url="https://x.com/" style={{ height: 30, width: 30 }} bgColor="#252559"/>
            <SocialIcon target="blank" url="https://discord.com/" style={{ height: 30, width: 30 }} bgColor="#252559"/>
            <Link target="blank" href="https://sepolia.etherscan.io/token/0xb2c86ccfbfbe235657a5d2556f2b3b1156a23283">
              <Image src="/assets/etherscan-logo-circle.png" alt="etherscan" height={30} width={30}/>
            </Link>
          </div>
        </div>
        <Participate />
      </div>
    </>
  );
};

export default Page;