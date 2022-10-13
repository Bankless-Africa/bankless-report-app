function Join() {
  return (
    <div className="min-h-screen bg-black text-white flex justify-center">
        <div className="max-w-4xl flex flex-col items-center justify-center space-y-2.5 py-20">
            <h1 className="text-4xl font-bold tracking-wider">Join Bankless Research Community</h1>
            <p className="max-w-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus amet, non massa ultricies amet.</p>
            <div>
                <form className="flex">
                    <input type="text" placeholder="Enter email" className="p-2.5 w-full rounded-l-lg outline-none text-black" />
                    <button className="bg-red-700 p-2.5 rounded-r-lg">Subscribe</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Join