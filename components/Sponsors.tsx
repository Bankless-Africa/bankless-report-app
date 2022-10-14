import Image from "next/image"

function Sponsors() {
    const sponsors = [
        {
            key: 1,
            image: "/dao.png"
        },
        {
            key: 2,
            image: "/dao.png"
        },
        {
            key: 3,
            image: "/dao.png"
        },
        {
            key: 4,
            image: "/dao.png"
        },
        {
            key: 5,
            image: "/dao.png"
        },
    ]
  return (
    <div className="min-h-full flex justify-center bg-white/50">
      <div className="max-w-xl lg:max-w-4xl xl:max-w-6xl w-full flex py-5 overflow-x-scroll scrollbar-hide justify-between">
        {
            sponsors.map(sponsor => <div className="relative min-w-[200px] h-[200px]">
              <Image key={sponsor.key} src={sponsor.image} layout="fill" />
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Sponsors
