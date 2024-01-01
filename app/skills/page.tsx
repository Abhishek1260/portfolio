import { Metadata } from "next"
import { AngularSVG, FlutterSVG, KotlinSVG, NextSVG, NodeJSSVG, PytorchSVG, ReactSVG, SpringBootSVG, SwiftSVG, TensorflowSVG, ThreeSVG } from "../constants/constants"

export const metadata: Metadata = {
    title: "Skills",
    description: "My Skills"
}

export default function Page() {
    return <>


        <div className="w-full h-full bg-black bg-opacity-20 backdrop-blur-sm rounded overflow-y-scroll">
            <div className="w-full h-full p-8 ">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <div className="text-3xl font-medium text-gray-300">
                            My Skills
                        </div>
                        <div className="text-sm font-normal text-gray-500">
                            Skills where i have expertise
                        </div>
                    </div>
                    <SkillSection title="Website Frontend" subtitle="Technologies i use to create website frontend" arr={frontEndSkills} />
                    <SkillSection title="Backend" subtitle="Technologies i use to create backend" arr={backendSkills} />
                    <SkillSection title="Android Frontend" subtitle="Technologies i use to create Android Frontend" arr={androidSkills} />
                    <SkillSection title="IOS Frontend" subtitle="Technologies i use to create IOS Frontend" arr={iosSkills} />
                    <SkillSection title="Machine Learning" subtitle="Technologies i use to create Machine Learning Projects" arr={machineLearningSkills} />
                    <div className="h-8"></div>
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
    },
    {
        icon: AngularSVG,
        desc: "",
        iconClass: "p-12"
    }
]

const backendSkills = [
    {
        icon: NodeJSSVG,
        desc: "",
        iconClass: ""
    },
    {
        icon: SpringBootSVG,
        desc: "",
        iconClass: "p-8"
    }
]

const androidSkills = [
    {
        icon: FlutterSVG,
        desc: "",
        iconClass: "",
    },
    {
        icon: KotlinSVG,
        desc: "",
        iconClass: "",
    }
]

const iosSkills = [
    {
        icon: FlutterSVG,
        desc: "",
        iconClass: "",
    },
    {
        icon: SwiftSVG,
        desc: "",
        iconClass: "p-16",
    }
]

const machineLearningSkills = [
    {
        icon: TensorflowSVG,
        desc: "",
        iconClass: "",
    },
    {
        icon: PytorchSVG,
        desc: "",
        iconClass: "",
    }
]

const SkillCard = ({ icon, desc, iconClass }: { icon: any, desc: string, iconClass: string }) => {
    return <div className="flex-shrink-0 w-60 h-60 bg-opacity-40 rounded-lg backdrop-blur-lg flex justify-center items-center bg-black p-4">

        <div className={`w-full ${iconClass}`}>
            {icon}
        </div>

    </div>
}

const SkillSection = ({ title, subtitle, arr }: { title: string, subtitle: string, arr: Array<any> }) => {
    return <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
            <div className="text-2xl text-gray-300 font-normal">
                {title}
            </div>
            <div className="text-sm font-normal text-gray-500">
                {subtitle}
            </div>
        </div>
        <div className="flex flex-row gap-4 w-full flex-shrink-0 flex-nowrap overflow-x-scroll">
            {
                arr.map((e, index) => <SkillCard key={index} iconClass={e.iconClass} icon={e.icon} desc={e.desc} />)
            }
        </div>
    </div>
}