import {
    ChartBarIcon,
    ChartSquareBarIcon,
    BadgeCheckIcon
} from "@heroicons/react/outline"
import Card from "./Card"

function Reports() {
    const cards = [
        {
            key: 1,
            icon: <ChartBarIcon className="w-10 h-10" />,
            title: "BR Insight Reports",
            description: `
            Research report for informed overview of a particular subject.
            1500 word article. Shared through bDAOs media channels and set
            up to be shared through clients media outlets. Infographic
            provided along with the Bankless Research Logo for client
            use on the document.`,
            url: "/"
        },
        {
            key: 2,
            icon: <ChartSquareBarIcon className="w-10 h-10" />,
            title: "Custom Research Report",
            description: `
            Research report for informed overview of a particular subject.
            1500 word article. Shared through bDAOs media channels and set
            up to be shared through clients media outlets. Infographic
            provided along with the Bankless Research Logo for client
            use on the document.`,
            url: "/"
        },
        {
            key: 3,
            icon: <BadgeCheckIcon className="w-10 h-10" />,
            title: "Common Grants Report",
            description: `
            Research report for informed overview of a particular subject.
            1500 word article. Shared through bDAOs media channels and set
            up to be shared through clients media outlets. Infographic
            provided along with the Bankless Research Logo for client
            use on the document.`,
            url: "/"
        },
    ]
  return (
    <div className="w-full max-h-full bg-black flex justify-center items-center text-white py-20">
      <div className="max-w-4xl xl:max-w-6xl flex flex-col items-center space-y-4 xl:space-y-8 text-center">
          <h3 className="text-4xl font-semibold max-w-xl">High-Quality Research Reports</h3>
          <p className="text-2xl max-w-xl">In order to make use of the full potential of a DAO we have tailored our services and offerings in 3 packages</p>
          <div className="flex space-x-5 max-w-[300px] sm:max-w-lg md:max-w-xl lg:max-w-full overflow-x-scroll scrollbar-hide">
            {
                cards.map(card => <Card key={card.key} icon={card.icon} title={card.title} description={card.description} url={card.url} />)
            }
          </div>
      </div>
    </div>
  )
}

export default Reports