import Image from "next/image"

interface Props {
    icon: string,
    title: string,
    description: string
}

function Offering({ icon, title, description }: Props) {
  return (
    <div>
        <div className="card w-[300px] bg-[#8080803f] shadow-xl flex items-start">
            <div className="px-4 pt-4">
                <Image src={icon} width={50} height={50} />
            </div>
            <div className="card-body !px-4 !py-2.5">
                <h2 className="card-title">{title}</h2>
                <p className="!text-left text-sm">{description}</p>
            </div>
        </div>
    </div>
  )
}

export default Offering
