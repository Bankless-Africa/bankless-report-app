import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    return(
        <div className="flex flex-col md:flex-row justify-between items-center space-y-5 sm:space-y-0 w-full">
            <div>
                <Image src={"/banklesslogo.png"} width={300} height={75} />
            </div>
            <div className="lg:text-xl xl:text-2xl xl:max-w-sm tracking-wider flex w-full sm:max-w-xs justify-between items-center flex-1">
                <Link href="/"><a className="text-red-700">Home</a></Link>
                <Link href="/"><a className="hover:text-red-700 text-white">Pricing</a></Link>
                <button className="px-5 py-2.5 text-white rounded-lg border-red-700 border-2">Launch App</button>
            </div>
        </div>
    )
}

export default Navbar