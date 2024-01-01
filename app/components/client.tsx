"use client"

import Link from "next/link"
import { ContactSVG, DownloadSVG, ExploreSVG, MenuSVG, ProjectsSVG, SkillsSVG } from "../constants/constants"
import { useStore } from "../state/store"
import { useEffect, useState } from "react"

export const NavbarMenuButton = () => {

    const { toggleMenu } = useStore()

    return <>

        <button onClick={() => { toggleMenu() }}>
            {MenuSVG}
        </button>

    </>
}

export const SideBar = () => {

    const { showMenu, toggleMenu } = useStore()

    return <>

        {
            showMenu ?
                <div className=" w-full z-50 absolute top-0 flex flex-col bg-black bg-opacity-20 rounded backdrop-blur-sm left-0 h-full lg:w-1/4 p-8  ">
                    <div className="flex flex-col gap-8">

                        <Link href="/skills">
                            <LabelStyle toggleMenu={() => { toggleMenu() }} icon={SkillsSVG} text="Skills" />
                        </Link>
                        <Link href="/project">
                            <LabelStyle toggleMenu={() => { toggleMenu() }} icon={ProjectsSVG} text="My Projects" />
                        </Link>
                        <Link href="/contact">
                            <LabelStyle toggleMenu={() => { toggleMenu() }} icon={ContactSVG} text="Contact Me" />
                        </Link>
                    </div>

                    <div className="flex-1">

                    </div>
                    <div>
                        <a href="/Resume.pdf" target="_blank">
                            <LabelStyle toggleMenu={() => { toggleMenu() }} icon={DownloadSVG} text="Download Resume" />
                        </a>
                    </div>
                </div>
                :
                null
        }

    </>

}

const LabelStyle = ({ toggleMenu, icon, text }: { toggleMenu: () => void, icon: any, text: string }) => {
    return <>
        <button onClick={() => { toggleMenu() }} className="flex flex-row gap-3 fill-gray-300 text-gray-300">
            <span>
                {icon}
            </span>
            <span>
                {text}
            </span>
        </button>
    </>
}

export const ProjectCard = ({ icons, title, desc }: { icons: any, title: string, desc: string }) => {

    const [mobile, setMobile] = useState(false)


    useEffect(() => {

        const listener = window.addEventListener("resize", () => {

            if (window.innerWidth < 740) {
                setMobile(true)
            } else {
                setMobile(false)
            }

        })


        if (window.innerWidth < 740) {
            setMobile(true)
        } else {
            setMobile(false)
        }

        return () => window.removeEventListener("resize", () => { })

    }, [])
    return <>

        {
            !mobile ? <div className="w-full h-80 bg-black rounded bg-opacity-40 backdrop-blur-md p-4 flex flex-row gap-4">
                <div className="h-full aspect-square bg-black bg-opacity-45 backdrop-blur-lg rounded flex flex-col">
                    {icons}
                </div>
                <div className="flex flex-col w-full h-full gap-4 text-justify">
                    <div className="text-2xl font-medium text-gray-300 line-clamp-1 text-ellipsis">

                    </div>
                    <div className="flex-1 w-full h-full overflow-y-scroll text-justify text-md font-normal text-gray-500">
                        {desc}
                    </div>
                </div>
            </div> :
                <>
                    <div className="w-full p-8  bg-black rounded bg-opacity-40 backdrop-blur-md">
                        <div className="w-full h-full flex flex-col gap-4">
                            <div className="text-2xl font-medium text-gray-300 line-clamp-1 text-ellipsis">
                                {title}
                            </div>
                            <div className="w-full aspect-square bg-black bg-opacity-45 backdrop-blur-lg rounded flex flex-col">
                                {icons}
                            </div>
                            <div className="flex-1 w-full h-full text-justify overflow-y-scroll text-md font-normal text-gray-500">
                                {desc}
                            </div>
                        </div>
                    </div>
                </>
        }

    </>

}