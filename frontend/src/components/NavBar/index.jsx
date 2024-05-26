import Link from "next/link"
import ConnectButton from "./ConnectButton"

const Navbar = () => {
    return (
        <>
            <header className="bg-color-primary bg-opacity-10 border-b-2 border-color-gray border-opacity-10 px-20">
                <div className="flex justify-between items-center p-3">
                    <Link href="/" className="font-bold text-xl text-color-primary">Crowdfunding</Link>
                    <ConnectButton />
                </div>
            </header>
        </>
    )
}

export default Navbar