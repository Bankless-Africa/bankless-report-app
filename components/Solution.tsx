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
    <div className="flex justify-center items-center bg-black max-h-full text-white p-5 bg-gradient-to-br from-black via-white/25 to-white/10">
        <div className="max-w-4xl xl:max-w-6xl flex flex-col items-center lg:items-start lg:flex-row justify-between lg:space-x-5 space-y-5 lg:space-y-0 xl:py-10">
            <div className="flex-1 flex flex-col items-center justify-center text-center lg:items-start lg:justify-start lg:text-left space-y-2 xl:space-y-5">
                <h3 className="text-2xl md:text-4xl font-semibold">What Solution is Bankless Research giving?</h3>
                <p className="text-base">A research report that makes navigating Web3 feel easy again</p>
                <Image src={"/solution.png"} width={350} height={300} />
            </div>
            <div className="max-w-2xl lg:max-w-md space-y-2">
                {
                    solutions.map((solution, index) => <SolutionItem key={solution.key} title={solution.title} description={solution.description} index={index} total={solutions.length} />)
                }
            </div>
        </div>
    </div>
  )
}

export default Solution
