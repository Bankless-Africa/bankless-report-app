import Image from "next/image"

function Community() {
  return (
    <div className="w-full relative min-h-screen sm:h-screen bg-black flex justify-center">
      <div className="w-full h-full flex flex-col sm:flex-row p-5 md:space-x-5 max-w-8xl">
        <div className="w-full flex-1 relative min-h-[400px] min-w-[300px] sm:h-full">
          <Image src={"/meta.png"} layout="fill" />
        </div>
        <div className="flex-1 flex flex-col w-full items-center justify-center px-2.5 md:px-0">
          <div className="space-y-6 text-white max-w-xs md:max-w-xl">
            <h3 className="text-2xl md:text-4xl font-semibold">Lorem ipsum dolor sit amet, consectetur</h3>
            <p className="text-lg md:text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla morbi et mi turpis ullamcorper.</p>
            <div className="flex">
              <div className="border-2 border-red-700 rounded-lg rounded-b-none border-b-0 p-2.5 text-center">
                <h2 className="text-xl md:text-5xl font-semibold">1.2k</h2>
                <p className="text-base">Lorem ipsum </p>
              </div>
              <div className="border-2 border-red-700 rounded-b-none border-l-0 p-2.5 border-t-0 border-r-0 -ml-0.5 text-center">
                <h1 className="text-xl md:text-5xl font-semibold">1.2k</h1>
                <p className="text-base">Lorem ipsum </p>
              </div>
              <div className="border-2 border-red-700 rounded-lg rounded-b-none border-b-0 p-2.5 -ml-0.5 text-center">
                <h1 className="text-xl md:text-5xl font-semibold">1.2k</h1>
                <p className="text-base">Lorem ipsum </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Community


/**
 * 
 * 
 * 
 * <div className="max-w-4xl xl:max-w-6xl flex flex-col md:flex-row justify-center items-center space-x-5">
        
      </div>
 */
