import React from 'react'
import MyCard from '@/components/MyCard'
import SideMenu from '@/components/SideMenu'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#121212] flex items-center justify-center p-4 font-sans overflow-hidden relative">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-8 lg:gap-16">
        
        {/* ฝั่งซ้าย: Profile Card */}
        <div className="shrink-0 transform scale-90 md:scale-95 origin-center transition-transform">
          <MyCard />
        </div>

        {/* ฝั่งขวา: Content Section */}
        <div className="flex-1 text-white text-center md:text-left py-4">
          
          <h2 className="text-xl md:text-2xl font-medium mb-4 tracking-[0.1em]">
            Lets Work <span className="text-orange-500">Together !</span>
          </h2>

          {/* ข้อความเดิมของคุณ */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            Hi From <span className="text-orange-500">Saranchai</span> ,<br />
            Interactive Designer & Fullstack Web Developer
          </h1>

          <p className="text-gray-400 text-base md:text-lg max-w-xl mb-10 leading-relaxed font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime 
            tempora at neque a adipisci nulla voluptatem? Mollitia, officiis.
          </p>

          {/* Stats Section */}
          <div className="flex flex-row justify-center md:justify-start gap-12">
            <div className="flex flex-col">
              <h3 className="text-orange-500 text-4xl md:text-5xl font-bold mb-1">3+</h3>
              <p className="text-gray-500 uppercase tracking-[0.2em] text-[10px] md:text-[11px] leading-4">
                Years of<br/>Experience
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-orange-500 text-4xl md:text-5xl font-bold mb-1">10+</h3>
              <p className="text-gray-500 uppercase tracking-[0.2em] text-[10px] md:text-[11px] leading-4">
                Projects<br/>Completed
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar Navigation */}
        <SideMenu activeTab="home" />

      </div>
    </main>
  )
}