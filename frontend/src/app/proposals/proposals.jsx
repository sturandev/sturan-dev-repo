import Link from "next/link";

const Participate = () => {
  return (
    <div className="col-span-8 mr-24 ml-20">
      <p className="col-span-2 font-bold ml-4 mt-10 mb-5 text-2xl">Proposals</p>
      <span className="ml-4 text-color-red">*This website build on sepolia testnet and this website is not responsive yet 😇</span>
      <div className="ml-4">
      <span className="text-color-red">*If you found bug in this website, please <Link href="https://singgihbrilian.tara06@gmail.com">contact me</Link></span>
      </div>
      <div className="border-[1px] p-3 ml-4 rounded-lg border-color-gray border-opacity-10 mb-5">
        <Link href="/proposals/aloa_games">
          <div className="grid grid-cols-7">
            <h1 className="col-span-6 font-bold">Aloa Games</h1>
            <p className="col-span-1 flex justify-center p-1 bg-color-green rounded-2xl text-color-white">
              Open
            </p>
          </div>
          <p className="text-color-sky">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <h1 className="mt-3 font-semibold">End 30 july 2024</h1>
          <h1 className="mt-3 text-color-typography font-semibold">
            25.000 XTR
          </h1>
        </Link>
      </div>
      <div className="border-[1px] p-3 ml-4 rounded-lg border-color-gray border-opacity-10 mb-5">
        <Link href="/proposals/beta_project">
          <div className="grid grid-cols-7">
            <h1 className="col-span-6 font-bold">Beta Project</h1>
            <p className="col-span-1 flex justify-center p-1 bg-color-red rounded-2xl text-color-white">
              Closed
            </p>
          </div>
          <p className="text-color-sky">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <h1 className="mt-3 font-semibold">End 15 June 2024</h1>
          <h1 className="mt-3 text-color-typography font-semibold">
            15.000 XTR
          </h1>
        </Link>
      </div>
      <div className="border-[1px] p-3 ml-4 rounded-lg border-color-gray border-opacity-10 mb-5">
        <Link href="/proposals/gamma_initiative">
          <div className="grid grid-cols-7">
            <h1 className="col-span-6 font-bold">Gamma Initiative</h1>
            <p className="col-span-1 flex justify-center p-1 bg-color-purple rounded-2xl text-color-white">
              Pending
            </p>
          </div>
          <p className="text-color-sky">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <h1 className="mt-3 font-semibold">End 1 August 2024</h1>
          <h1 className="mt-3 text-color-typography font-semibold">
            30.000 XTR
          </h1>
        </Link>
      </div>
      <div className="border-[1px] p-3 ml-4 rounded-lg border-color-gray border-opacity-10 mb-5">
        <Link href="/proposals/delta_ventures">
          <div className="grid grid-cols-7">
            <h1 className="col-span-6 font-bold">Delta Ventures</h1>
            <p className="col-span-1 flex justify-center p-1 bg-color-green rounded-2xl text-color-white">
              Open
            </p>
          </div>
          <p className="text-color-sky">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur.
          </p>
          <h1 className="mt-3 font-semibold">End 20 August 2024</h1>
          <h1 className="mt-3 text-color-typography font-semibold">
            60.000 XTR
          </h1>
        </Link>
      </div>
    </div>
  );
};
export default Participate;
