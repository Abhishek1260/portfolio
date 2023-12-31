"use client"

import { ContactSVG, DownloadSVG, ExploreSVG, MenuSVG, ProjectsSVG, SkillsSVG } from "../constants/constants"
import { useStore } from "../state/store"

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
                <div className="absolute top-0 flex flex-col bg-black bg-opacity-20 rounded backdrop-blur-sm left-0 h-full w-1/4 p-8">
                    <div className="flex flex-col gap-8">
                        <LabelStyle toggleMenu={() => { toggleMenu() }} icon={ExploreSVG} text="My Journey" />
                        <LabelStyle toggleMenu={() => { toggleMenu() }} icon={SkillsSVG} text="Skills" />
                        <LabelStyle toggleMenu={() => { toggleMenu() }} icon={ProjectsSVG} text="My Projects" />
                        <LabelStyle toggleMenu={() => { toggleMenu() }} icon={ContactSVG} text="Contact Me" />
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