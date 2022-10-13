interface Props {
    index: number,
    title: string,
    description: string
}

function SolutionItem({ index, title, description }: Props) {
  return (
    <div className="flex space-x-2.5">
        <div>
            <h1 className="text-2xl font-semibold text-red-700">{index < 10 && "0"}{index + 1}</h1>
        </div>
        <div>
            <h1 className="text-2xl font-semibold space-y-2">{title}</h1>
            <p className="text-sm">{description}</p>
        </div>
    </div>
  )
}

export default SolutionItem
