import Image from "next/image"
import Link from "next/link"

function Footer() {
  return (
    <div className="h-72 w-full flex justify-center py-10 bg-black">
        <div className="max-w-4xl xl:max-w-6xl border-2 border-t-red-700 border-x-0 border-b-0 w-full flex flex-col justify-center items-center space-y-4">
            <div className="pt-10">
                <Image src={"/banklesslogo.png"} width={300} height={75} />
            </div>
            <div className="flex items-center space-x-5">
              <Link href={"/"}>
                <a>
                  <Image src={"/twitter.png"} width={35} height={30} />
                </a>
              </Link>
              <Link href={"/"}>
                <a>
                  <Image src={"/spotify.png"} width={35} height={35} />
                </a>
              </Link>
              <Link href={"/"}>
                <a>
                  <Image src={"/facebook.png"} width={45} height={30} />
                </a>
              </Link>
              <Link href={"/"}>
                <a>
                  <Image src={"/twitter.png"} width={35} height={30} />
                </a>
              </Link>
              <Link href={"/"}>
                <a>
                  <Image src={"/instagram.png"} width={35} height={30} />
                </a>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer