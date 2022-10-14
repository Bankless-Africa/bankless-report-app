import Navbar from "./Navbar"

const Hero = () => {
    return(
        <div className="relative min-h-screen md:h-screen p-5 bg-gradient-to-br from-red-700 via-black to-red-700">
            <div className="w-full text-white flex flex-col items-center h-full">
                <Navbar />
                <div className="flex flex-col justify-center items-center h-full w-full py-4">
                    <div className="max-w-5xl w-full text-center space-y-4 flex flex-col justify-center items-center">
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold">Bankless <span className="text-red-700">Research</span> Reports</h1>
                        <div className="max-w-3xl">
                            <p className="text-lg sm:text-2xl">The highest quality Research Content in Web3 that helps you cut through the noise and make smart decisions!”</p>
                        </div>
                        <button className="bg-red-700 px-5 py-2.5 text-white rounded-lg">Launch App</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero