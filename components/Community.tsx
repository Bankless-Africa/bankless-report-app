import Image from "next/image"

function Community() {
  return (
    <div className="w-full relative h-screen bg-black">
      <div className="w-full h-full flex p-5 space-x-5">
        <div className="w-full flex-1 relative">
          <Image src={"/meta.png"} layout="fill" />
        </div>
        <div className="flex-1 flex flex-col w-full items-center justify-center">
          <div className="space-y-6 text-white max-w-xl">
            <h3 className="text-4xl font-semibold">Lorem ipsum dolor sit amet, consectetur</h3>
            <p className="text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla morbi et mi turpis ullamcorper.</p>
            <div className="flex">
              <div className="border-2 border-red-700 rounded-lg rounded-b-none border-b-0 p-2.5 text-center">
                <h2 className="text-5xl font-semibold">1.2k</h2>
                <p className="text-xs xl:text-lg">Lorem ipsum </p>
              </div>
              <div className="border-2 border-red-700 rounded-b-none border-l-0 p-2.5 border-t-0 border-r-0 -ml-0.5 text-center">
                <h1 className="text-5xl font-semibold">1.2k</h1>
                <p className="text-xs xl:text-lg">Lorem ipsum </p>
              </div>
              <div className="border-2 border-red-700 rounded-lg rounded-b-none border-b-0 p-2.5 -ml-0.5 text-center">
                <h1 className="text-5xl font-semibold">1.2k</h1>
                <p className="text-xs xl:text-lg">Lorem ipsum </p>
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
