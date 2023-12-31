"use client"

import Experience from './Experience/Experience'
import './globals.css'
import Navbar from './Navbar/Navbar'
import { SideBar } from './components/client'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className='-z-10 w-screen h-screen top-0 left-0 absolute blur-sm'>
          <Experience />
        </div>
        <div className=' z-50 w-screen h-screen flex flex-col'>
          <div className=''>
            <Navbar />
          </div>
          <div className='flex-1 w-full h-full px-4 pb-4'>
            <div className='w-full h-full relative'>
              <SideBar />
              {children}
            </div>
          </div>
        </div>
      </body>
    </html >
  )
}
