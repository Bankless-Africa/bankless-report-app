import Offering from "./Offering"

function Offerings() {
    const offerings = [
        {
            key: 1,
            icon: "/gov.png",
            title: "Governance Strategy",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus ultricies lectus vitae etiam porttitor aenean nisl nisi netus."
        },
        {
            key: 2,
            icon: "/bus.png",
            title: "Business Strategy",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus ultricies lectus vitae etiam porttitor aenean nisl nisi netus."
        },
        {
            key: 3,
            icon: "/comm.png",
            title: "Community Strategy",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus ultricies lectus vitae etiam porttitor aenean nisl nisi netus."
        },
        {
            key: 4,
            icon: "/token.png",
            title: "Tokenomics Strategy",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus ultricies lectus vitae etiam porttitor aenean nisl nisi netus."
        },
        {
            key: 5,
            icon: "/crypto.png",
            title: "Crypto Asset Strategy",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus ultricies lectus vitae etiam porttitor aenean nisl nisi netus."
        },
        {
            key: 6,
            icon: "/treasury.png",
            title: "Treasury Strategy",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus ultricies lectus vitae etiam porttitor aenean nisl nisi netus."
        },
        {
            key: 7,
            icon: "/marketing.png",
            title: "Marketing/PR Strategy Research",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus ultricies lectus vitae etiam porttitor aenean nisl nisi netus."
        },
        {
            key: 8,
            icon: "/dev.png",
            title: "BR IP Development",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus ultricies lectus vitae etiam porttitor aenean nisl nisi netus."
        },
    ]
  return (
    <div className="bg-black flex justify-center max-h-full py-10">
      <div className="max-w-6xl flex flex-col items-center text-white space-y-4 px-2.5">
        <h3 className="text-4xl font-semibold">Product Offering</h3>
        <h4 className="text-2xl max-w-2xl text-center">Bankless Research Report offering incorporates all components that you need to make smart decisions, including:</h4>
        <div className="flex flex-wrap justify-center gap-4 xl:grid grid-cols-3">
            {
                offerings.map(offering => <Offering key={offering.key} icon={offering.icon} title={offering.title} description={offering.description} />)
            }
        </div>
      </div>
    </div>
  )
}

export default Offerings
