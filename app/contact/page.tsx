"use client"

import { useState } from "react"

interface Contact {
    body: string
    title: string
}

export default function Page() {

    const [contact, setContact] = useState<Contact>({
        body: "",
        title: ""
    })


    return <>

        <div className="w-full h-full flex justify-center items-center">

            <div className="w-full md:w-1/2 lg:w-1/3 bg-black bg-opacity-20 backdrop-blur-sm rounded p-8">
                <div className="w-full h-full flex flex-col gap-4">
                    <div>
                        <div className="text-gray-300 font-medium text-3xl">
                            Contact Me
                        </div>
                        <div className="text-sm font-normal text-gray-500">
                            Fill the form below and click send
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <input value={contact.title} onChange={(e) => { setContact({ ...contact, title: e.target.value }) }} type="text" placeholder="Subject" className="w-full h-12 px-3 py-2 outline-none bg-black bg-opacity-50 backdrop-blur-lg rounded-md text-gray-100" />

                        <textarea value={contact.body} onChange={(e) => { setContact({ ...contact, body: e.target.value }) }} placeholder="Body" className="w-full h-36 resize-none px-3 py-2 outline-none bg-black bg-opacity-50 backdrop-blur-lg rounded-md text-gray-100" />
                    </div>

                    <div>
                        <a href={`mailto:abhishekbansal938@gmail.com?subject=${contact.title}&body=${contact.body}`} className="flex justify-center items-center w-full h-12 uppercase text-white bg-black bg-opacity-50 backdrop-blur-lg rounded-md">
                            submit
                        </a>
                    </div>
                </div>
            </div>

        </div>

    </>
}