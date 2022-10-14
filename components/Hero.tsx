import Navbar from "./Navbar"

const Hero = () => {
    return(
        <div className="relative min-h-screen">
            <div className="absolute inset-x-0 top-0 bottom-0 bg-gradient-to-br from-red-700 via-black to-red-700
                flex flex-col justify-center items-center space-y-5 sm:space-y-0">
                <div className="top-0 absolute inset-x-0">
                    <Navbar />
                </div>
                <div className="flex justify-center px-2.5 lg:p-0 space-y-5 sm:space-y-0">
                    <div className="max-w-4xl xl:max-w-6xl text-center text-white space-y-4 xl:space-y-8 flex flex-col items-center">
                        <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold">Bankless <span className="text-red-700">Research</span> Reports</h1>
                        <p className="max-w-lg text-lg xl:text-2xl">The highest quality Research Content in Web3 that helps you cut through the noise and make smart decisions!”</p>
                        <button className="bg-red-700 text-white tracking-widest font-semibold py-3.5 px-7 rounded-xl xl:text-2xl">Launch app</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero