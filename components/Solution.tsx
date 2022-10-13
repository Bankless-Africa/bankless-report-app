import Image from "next/image"
import SolutionItem from "./SolutionItem"

function Solution() {
    const solutions = [
        {
            key: 1,
            title: "Lorem ipsum dolor ",
            description: "Providing you and informed overview of a particular subject for knowledge dissemination"
        },
        {
            key: 2,
            title: "Lorem ipsum dolor ",
            description: "Analysing aggregated data from trusted sources."
        },
        {
            key: 3,
            title: "Lorem ipsum dolor ",
            description: "Applying qualitative and quantitative analysis for an in depth understanding of a project"
        },
        {
            key: 4,
            title: "Lorem ipsum dolor ",
            description: "Maintaining a close relationship with our partners throughout, taking onboard feedback prior to the final report is being published."
        },
    ]
  return (
    <div className="flex justify-center items-center bg-black min-h-screen text-white p-5">
        <div className="max-w-4xl flex flex-col lg:flex-row justify-between space-x-5">
            <div className="flex-1 flex flex-col items-start justify-start text-left space-y-2">
                <h2 className="text-3xl font-semibold">What Solution is Bankless Research giving?</h2>
                <p className="text-lg">A research report that makes navigating Web3 feel easy again</p>
                <Image src={"/solution.png"} width={350} height={300} />
            </div>
            <div className="max-w-md space-y-2">
                {
                    solutions.map((solution, index) => <SolutionItem key={solution.key} title={solution.title} description={solution.description} index={index} />)
                }
            </div>
        </div>
    </div>
  )
}

export default Solution
