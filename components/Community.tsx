import Image from "next/image"

function Community() {
  return (
    <div className="w-full min-h-screen bg-black flex justify-center px-1 sm:px-5 py-20">
      <div className="max-w-4xl flex flex-col md:flex-row justify-center items-center space-x-5">
        <div>
          <Image src={"/meta.png"} width={400} height={400} />
        </div>
        <div className="max-w-sm space-y-2.5 text-white">
          <h1 className="text-4xl font-semibold">Lorem ipsum dolor sit amet, consectetur</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla morbi et mi turpis ullamcorper.</p>
          <div className="flex">
            <div className="border-2 border-red-700 rounded-lg rounded-b-none border-b-0 p-2.5 text-center">
              <h1 className="text-4xl font-semibold">1.2k</h1>
              <p className="text-xs">Lorem ipsum </p>
            </div>
            <div className="border-2 border-red-700 rounded-b-none border-l-0 p-2.5 border-t-0 border-r-0 -ml-0.5 text-center">
              <h1 className="text-4xl font-semibold">1.2k</h1>
              <p className="text-xs">Lorem ipsum </p>
            </div>
            <div className="border-2 border-red-700 rounded-lg rounded-b-none border-b-0 p-2.5 -ml-0.5 text-center">
              <h1 className="text-4xl font-semibold">1.2k</h1>
              <p className="text-xs">Lorem ipsum </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Community
