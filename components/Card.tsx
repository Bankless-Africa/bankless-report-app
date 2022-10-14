import { ArrowRightIcon } from "@heroicons/react/outline"
import Link from "next/link"
import { ReactElement } from "react"

interface Props {
    icon: ReactElement<any, any>,
    title: string,
    description: string,
    url: string
}

function Card({ icon, title, description, url }: Props) {
  return (
    <div>
      <div className="card w-[300px] xl:w-[350px] h-full bg-[#8080803f] shadow-xl flex items-start">
            <div className="px-4 pt-4">
                <div className="bg-red-600 p-3.5 rounded-full">{icon}</div>
            </div>
            <div className="card-body !px-4 !py-2.5">
                <h2 className="card-title xl:text-4xl xl:text-start">{title}</h2>
                <p className="!text-left xl:text-xl">{description}</p>
            </div>
            <Link href={url}>
                <a>
                    <div className="flex items-center px-4 py-2.5 space-x-1 text-red-700">
                        <h4 className="xl:text-2xl xl:font-semibold h-10">See more</h4>
                        <div><ArrowRightIcon className="w-6" /></div>
                    </div>
                </a>
            </Link>
        </div>
    </div>
  )
}

export default Card
