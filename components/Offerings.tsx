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
    <div className="bg-black flex justify-center min-h-screen py-10">
      <div className="max-w-4xl flex flex-col items-center text-white space-y-2.5 px-5">
        <h1 className="text-2xl font-semibold">Product Offering</h1>
        <p className="text-lg max-w-lg">Bankless Research Report offering incorporates all components that you need to make smart decisions, including:</p>
        <div className="flex max-w-4xl flex-wrap justify-center gap-4">
            {
                offerings.map(offering => <Offering key={offering.key} icon={offering.icon} title={offering.title} description={offering.description} />)
            }
        </div>
      </div>
    </div>
  )
}

export default Offerings
