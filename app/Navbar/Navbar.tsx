import { DownloadSVG, MenuSVG } from "../constants/constants";

export default function Navbar() {
    return <>

        <div className="w-full h-24 p-4">
            <div className="bg-black backdrop-blur-sm bg-opacity-20 rounded-lg w-full h-full flex flex-row justify-between items-center px-8 fill-gray-300 ">
                <div>{MenuSVG}</div>
                <div className=" text-gray-300 text-xl font-semibold uppercase ">
                    portfolio
                </div>
                <div><a href="/Resume.pdf" target="_blank">{DownloadSVG}</a></div>
            </div>
        </div>

    </>
}