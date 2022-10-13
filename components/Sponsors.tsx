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
      <div className="max-w-4xl xl:max-w-6xl flex py-10">
        {
            sponsors.map(sponsor => <Image key={sponsor.key} src={sponsor.image} width={250} height={200} />)
        }
      </div>
    </div>
  )
}

export default Sponsors
