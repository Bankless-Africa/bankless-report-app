import { ArrowRightIcon } from "@heroicons/react/outline"
import Link from "next/link"
import { ReactElement } from "react"
import Divider from "./Divider"

interface Props {
    icon: ReactElement<any, any>,
    title: string,
    description: string,
    url: string
}

function Card({ icon, title, description, url }: Props) {
  return (
    <div>
      <div className="card w-[505px] h-full bg-[#8080803f] shadow-xl flex items-start py-5 space-y-5">
            <div className="px-8 pt-4">
                <div className="bg-red-600 to-black p-3.5 rounded-full">{icon}</div>
            </div>
            <div className="h-1 w-full px-8">
                <Divider />
            </div>
            <div className="card-body !px-8 !py-2.5">
                <h3 className="card-title !text-2xl">{title}</h3>
                <p className="!text-lg md:!text-xl text-start">{description}</p>
            </div>
            <Link href={url}>
                <a>
                    <div className="flex items-center px-8 py-2.5 space-x-1 text-red-700">
                        <h4 className="!text-lg md:!text-xl xl:font-semibold h-6">See more</h4>
                        <ArrowRightIcon className="w-6 h-6" />
                    </div>
                </a>
            </Link>
        </div>
    </div>
  )
}

export default Card
