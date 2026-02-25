import React from 'react'
import MyCard from '@/components/MyCard'
import SideMenu from '@/components/SideMenu'

export default function aboutme() {
  return (
    <main className="min-h-screen bg-[#121212] flex items-center justify-center p-6 font-sans">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 lg:gap-24">
        
        {/* ฝั่งซ้าย: Profile Card */}
        <div className="shrink-0">
          <MyCard />
        </div>

        {/* ฝั่งขวา: Content Section */}
        <div className="flex-1 text-white text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-medium mb-4">
            Lets Work <span className="text-orange-500">Together !</span>
          </h2>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Hi From <span className="text-orange-500">Saranchai</span> ,<br />
            Interactive Designer & Fullstack Web Developer
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mb-10 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime 
            tempora at neque a adipisci nulla voluptatem? Mollitia, officiis, architecto 
            earum voluptates obcaecati corrupti voluptatem.
          </p>

          {/* Stats Section */}
          <div className="flex flex-row justify-center md:justify-start gap-12">
            <div>
              <h3 className="text-orange-500 text-5xl font-bold mb-2">3+</h3>
              <p className="text-gray-400 uppercase tracking-widest text-sm">Years of<br/>Experience</p>
            </div>
            <div>
              <h3 className="text-orange-500 text-5xl font-bold mb-2">10+</h3>
              <p className="text-gray-400 uppercase tracking-widest text-sm">Projects<br/>Completed</p>
            </div>
          </div>
        </div>

        {/* Sidebar Navigation (Optional - ด้านขวาสุดตามรูป) */}
        <SideMenu />

      </div>
    </main>
  )
}