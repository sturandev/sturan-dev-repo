import Image from "next/image"

const Page = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-color-primary bg-opacity-10 h-screen">
            <Image src="/assets/kado-tertutup.png" height="500" width="500" alt="kado" />
            <div className="mt-4">
                <button className="p-2 bg-color-primary rounded-xl hover:bg-opacity-70 transition duration-300">Claim XTR</button>
            </div>
        </div>
    )
}

export default Page
