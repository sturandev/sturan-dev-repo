import Link from "next/link"

const Navbar = () => {
    return (
        <>
            <header className="bg-color-white px-20">
                <div className="flex justify-between items-center p-3">
                    <Link href="/" className="font-bold text-xl text-color-primary">Crowdfunding</Link>
                    <button className="font-bold p-2 text-color-primary border-[1px] border-color-primary border-opacity-15 hover:shadow-xl rounded-xl transition-all duration-300 ease-out">Connect</button>
                </div>
            </header>
        </>
    )
}

export default Navbar