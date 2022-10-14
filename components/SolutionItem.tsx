import Divider from "./Divider"

interface Props {
    index: number,
    title: string,
    description: string,
    total: number
}

function SolutionItem({ index, title, description, total }: Props) {
  return (
    <div className="flex space-x-2.5">
        <div>
            <h5 className="text-xl font-semibold text-red-700">{index < 10 && "0"}{index + 1}</h5>
        </div>
        <div className="space-y-2">
            <h1 className="text-xl font-semibold">{title}</h1>
            <p className="text-base">{description}</p>
            { index + 1 != total && <Divider /> }
        </div>
    </div>
  )
}

export default SolutionItem
