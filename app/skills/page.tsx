import { NextSVG, ReactSVG, ThreeSVG } from "../constants/constants"

export default function Page() {
    return <>


        <div className="w-full h-full bg-black bg-opacity-20 backdrop-blur-sm rounded p-8">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <div className="text-3xl font-medium text-gray-300">
                        My Skills
                    </div>
                    <div className="text-sm font-normal text-gray-500">
                        Skills where i have expertise
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <div className="text-2xl text-gray-300 font-normal">
                            Website Frontend
                        </div>
                        <div className="text-sm font-normal text-gray-500">
                            Technologies i use to create website frontend
                        </div>
                    </div>
                    <div className="flex flex-row gap-4">
                        {
                            frontEndSkills.map((e) => <SkillCard iconClass={e.iconClass} icon={e.icon} desc={e.desc} />)
                        }
                    </div>
                </div>
            </div>
        </div>


    </>
}

const frontEndSkills = [
    {
        icon: ReactSVG,
        desc: "",
        iconClass: ""
    },
    {
        icon: NextSVG,
        desc: "",
        iconClass: "fill-white"
    }, {
        icon: ThreeSVG,
        desc: "",
        iconClass: "stroke-white"
    }
]

const SkillCard = ({ icon, desc, iconClass }: { icon: any, desc: string, iconClass: string }) => {
    return <div className="w-60 h-60 bg-opacity-40 rounded-lg backdrop-blur-lg flex justify-center items-center bg-black p-4">

        <div className={`w-full ${iconClass}`}>
            {icon}
        </div>

    </div>
}