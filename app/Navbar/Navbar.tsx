import Link from "next/link";
import { NavbarMenuButton } from "../components/client";
import { DownloadSVG, MenuSVG } from "../constants/constants";

export default function Navbar() {
    return <>

        <div className="w-full h-full p-4">
            <div className="bg-black backdrop-blur-sm bg-opacity-20 rounded-lg w-full h-full flex flex-row justify-between items-center px-8 fill-gray-300 ">
                <div>
                    <NavbarMenuButton />
                </div>
                <div className=" text-gray-300 text-xl font-semibold uppercase ">
                    <Link href="/">
                        portfolio
                    </Link>
                </div>
                <div><a href="/Resume.pdf" target="_blank">{DownloadSVG}</a></div>
            </div>
        </div>

    </>
}