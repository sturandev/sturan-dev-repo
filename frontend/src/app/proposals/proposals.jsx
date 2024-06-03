import Link from "next/link";

const Participate = () => {
  return (
<<<<<<< HEAD
    <div className="lg:mt-0 lg:pr-16 ms:mx-6 md:-mt-8">
      <p className="font-bold text-2xl mb-5 ml-4 lg:mt-10">Proposals</p>
      <div className="ml-4 mt-2">
        <span className="text-color-red">*If you find a bug in this website, please <Link href="mailto:singgihbrilian.tara06@gmail.com?subject=Bug%20Report&body=Please%20describe%20the%20bug%20you%20found%3A" className="underline">contact me</Link></span>
=======
    <div className="col-span-8 mr-24 ml-20">
      <p className="col-span-2 font-bold ml-4 mt-10 mb-5 text-2xl">Proposals</p>
      <span className="ml-4 text-color-red">*This website build on sepolia testnet so please switch network to sepolia.</span>
      <div>
      <span className="ml-4 text-color-red">*and this website is not responsive yet 😇</span>
      </div>
      <div className="ml-4 mb-3">
      <span className="text-color-red">*If you found bug in this website, please  <Link href="mailto:singgihbrilian.tara06@gmail.com?subject=Bug%20Report&body=Please%20describe%20the%20bug%20you%20found%3A" className="underline">
        contact me
      </Link></span>
>>>>>>> 9d044a39d50702357625529d6d4b3c812c1bc1b2
      </div>
      <div className="mt-4 space-y-4 px-4">
        <ProposalCard 
          title="Aloa Games" 
          status="Open" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
          endDate="End 30 July 2024" 
          reward="25.000 XTR" 
          statusColor="bg-color-green"
        />
        <ProposalCard 
          title="Beta Project" 
          status="Closed" 
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
          endDate="End 15 June 2024" 
          reward="15.000 XTR" 
          statusColor="bg-color-red"
        />
        <ProposalCard 
          title="Gamma Initiative" 
          status="Pending" 
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." 
          endDate="End 1 August 2024" 
          reward="30.000 XTR" 
          statusColor="bg-color-purple"
        />
        <ProposalCard 
          title="Delta Ventures" 
          status="Open" 
          description="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur." 
          endDate="End 20 August 2024" 
          reward="60.000 XTR" 
          statusColor="bg-color-green"
        />
      </div>
    </div>
  );
};

const ProposalCard = ({ title, status, description, endDate, reward, statusColor }) => (
  <div className="border p-4 rounded-lg border-color-gray border-opacity-10 mb-5">
    <Link href={`/proposals/${title.toLowerCase().replace(/ /g, "_")}`}>
      <div className="flex justify-between items-center mb-2">
        <h1 className="font-bold">{title}</h1>
        <p className={`flex justify-center p-1 rounded-2xl text-color-white ${statusColor}`}>
          {status}
        </p>
      </div>
      <p className="text-color-sky">{description}</p>
      <h1 className="mt-3 font-semibold">{endDate}</h1>
      <h1 className="mt-3 text-color-typography font-semibold">{reward}</h1>
    </Link>
  </div>
);

export default Participate;
