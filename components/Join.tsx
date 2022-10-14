function Join() {
  return (
    <div className="max-h-full text-white flex justify-center">
        <div className="max-w-4xl flex flex-col items-center justify-center space-y-2.5 xl:space-y-5 py-20 px-5 text-center">
            <h3 className="text-4xl font-bold max-w-3xl">Join Bankless Research Community</h3>
            <p className="text-2xl max-w-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus amet, non massa ultricies amet.</p>
            <div>
                <form className="flex flex-col sm:flex-row space-y-2.5 sm:space-y-0">
                    <input type="text" placeholder="Enter email" className="p-2.5 w-full sm:w-[250px] rounded-lg sm:rounded-none sm:rounded-l-lg outline-none text-black" />
                    <button className="bg-red-700 p-2.5 rounded-lg sm:rounded-none sm:rounded-r-lg xl:text-xl">Subscribe</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Join