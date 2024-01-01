import { Metadata } from "next"
import { ProjectCard } from "../components/client"
import { FlutterSVG, NextSVG, NodeJSSVG, PytorchSVG, ReactSVG, TensorflowSVG, ThreeSVG } from "../constants/constants"

export const metadata: Metadata = {
    title: "Projects",
    description: "My projects"
}

export default function Page() {
    return <>

        <div className="w-full h-full bg-black bg-opacity-25 backdrop-blur-sm rounded p-8 flex flex-col gap-8 overflow-y-scroll">
            <div className="flex flex-col gap-2">
                <div className="text-3xl font-medium text-gray-300">
                    My Projects
                </div>
                <div className="text-sm font-normal text-gray-500">
                    Some of my fully functional projects
                </div>
            </div>
            {projects.map((e) => <ProjectCard key={e.title} icons={e.icons} title={e.title} desc={e.desc} />)}
        </div>

    </>
}

const projects = [
    {
        icons: <>
            <div className="flex-1 h-full w-full flex flex-row">
                <div className="flex-1 w-full h-full flex p-4">
                    {NextSVG}
                </div>
                <div className="flex-1 w-full h-full flex p-4">
                    {ThreeSVG}
                </div>
            </div>
            <div className="flex-1 h-full w-full flex flex-row">
                <div className="flex-1 w-full h-full flex p-4">
                    {NodeJSSVG}
                </div>
                <div className="flex-1 w-full h-full">
                </div>
            </div>
        </>,
        title: "Portfolio Website",
        desc: `
        My portfolio website! I've crafted this space using Next.js for the frontend to ensure a smooth and efficient user experience, while Three.js brings dynamic and immersive 3D designs to life with real-time rendering. As you navigate through my projects and experiences, you'll notice the seamless integration of Next.js, which allows for fast page loads and a responsive layout. This framework's server-side rendering capability ensures that content is optimized for search engines and provides a snappy browsing experience.  Meanwhile, Three.js elevates the visual appeal of this portfolio with stunning 3D graphics and animations. Whether you're viewing my projects on a desktop or mobile device, Three.js ensures that the visuals are engaging and interactive, creating a memorable browsing experience.`,
    },
    {
        icons: <>
            <div className="flex-1 h-full w-full flex flex-row">
                <div className="flex-1 w-full h-full flex p-4">
                    {NextSVG}
                </div>
                <div className="flex-1 w-full h-full flex p-4">
                    {NodeJSSVG}
                </div>
            </div>
            <div className="flex-1 h-full w-full flex flex-row">
                <div className="flex-1 w-full h-full flex p-4">
                    {FlutterSVG}
                </div>
                <div className="flex-1 w-full h-full">
                </div>
            </div>
        </>,
        title: "Ecommerce Platform",
        desc: `
        
My eCommerce platform, where I've developed a seamless shopping experience using Next.js for the frontend, Node.js for the backend, and Flutter for both Android and iOS development. MongoDB serves as the database, ensuring efficient and scalable data management.

With Next.js, users can enjoy fast page loads and smooth navigation, whether they're on a desktop or mobile device. The frontend is designed to be intuitive and user-friendly, making shopping hassle-free.

Behind the scenes, the Node.js backend powers the platform's core functionalities, handling everything from user authentication to order processing. Its event-driven architecture ensures responsiveness, even during peak traffic.

Flutter's cross-platform capabilities allow for a consistent experience across Android and iOS devices, ensuring that mobile users have access to the same features as web users.

Data is securely stored and managed in MongoDB, providing flexibility and scalability as the platform grows. MongoDB's efficient data handling ensures high performance, even with increasing demands.
        `,
    },
    {
        icons: <>
            <div className="flex-1 w-full h-full flex">
                <div className="flex-1 w-full h-full flex p-4">
                    {TensorflowSVG}
                </div>
                <div className="flex-1 w-full h-full flex p-4">
                    {PytorchSVG}
                </div>
            </div>
            <div className="flex-1 w-full h-full flex">
                <div className="flex-1 w-full h-full flex p-4">
                    {ReactSVG}
                </div>
                <div className="flex-1 w-full h-full flex p-4">
                    {NodeJSSVG}
                </div>
            </div>
        </>,
        title: "Innovative screen reader app",
        desc: `
        My innovative screen reader app, developed with Python's Tkinter for the frontend and powered by TensorFlow and PyTorch for machine learning. This app is designed to assist partially blind individuals by using advanced machine learning algorithms to read and describe the content displayed on their screen.

Using Tkinter, I created a user-friendly interface that provides easy access to our app's features. The frontend is intuitive and accessible, allowing users to interact with the app effortlessly.

Behind the scenes, this app leverages the capabilities of TensorFlow and PyTorch, two powerful machine learning frameworks. These frameworks enable our app to analyze the content on the screen in real-time, identifying text and images in focus.

When text is detected, this app uses machine learning models to convert it into speech, providing an auditory description of the text for the user. Similarly, when an image is in focus, our app uses machine learning algorithms to generate a descriptive caption, allowing users to understand the visual content displayed on their screen.

My goal is to provide a valuable tool for partially blind individuals, empowering them to access and learn from digital content with greater ease. I am excited to offer this innovative solution and are committed to improving accessibility through the power of technology.`,
    },
]

