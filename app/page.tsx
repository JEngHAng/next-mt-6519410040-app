import React from 'react'
import MyCard from '@/components/MyCard'
import SideMenu from '@/components/SideMenu'

export default function HomePage() {
  return (
    // ปรับ p-6 เป็น p-4 และลด gap-12 เป็น gap-8 เพื่อให้พื้นที่กระชับขึ้น
    <main className="min-h-screen bg-[#121212] flex items-center justify-center p-4 font-sans overflow-hidden">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-8 lg:gap-16">
        
        {/* ฝั่งซ้าย: Profile Card - ใช้ scale เพื่อลดขนาดลง 5-10% ถ้ายังรู้สึกว่าใหญ่ไป */}
        <div className="shrink-0 transform scale-95 origin-center">
          <MyCard />
        </div>

        {/* ฝั่งขวา: Content Section */}
        <div className="flex-1 text-white text-center md:text-left py-4">
          {/* ลดขนาดหัวข้อรอง */}
          <h2 className="text-xl md:text-2xl font-medium mb-3">
            Lets Work <span className="text-orange-500">Together !</span>
          </h2>
          
          {/* ลดขนาดชื่อและตำแหน่งงานจาก 4xl/6xl เป็น 3xl/5xl */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
            Hi From <span className="text-orange-500">Saranchai</span> ,<br />
            Interactive Designer & Fullstack Web Developer
          </h1>

          {/* ลดขนาด Text และ margin-bottom */}
          <p className="text-gray-400 text-base md:text-lg max-w-xl mb-8 leading-relaxed font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime 
            tempora at neque a adipisci nulla voluptatem? Mollitia, officiis.
          </p>

          {/* Stats Section - ปรับขนาดตัวเลขลง */}
          <div className="flex flex-row justify-center md:justify-start gap-10">
            <div>
              <h3 className="text-orange-500 text-4xl font-bold mb-1">3+</h3>
              <p className="text-gray-500 uppercase tracking-widest text-[10px] leading-4">
                Years of<br/>Experience
              </p>
            </div>
            <div>
              <h3 className="text-orange-500 text-4xl font-bold mb-1">10+</h3>
              <p className="text-gray-500 uppercase tracking-widest text-[10px] leading-4">
                Projects<br/>Completed
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar Navigation - ส่ง activeTab="home" เพื่อให้ไอคอนแรกสีส้ม */}
        <SideMenu activeTab="home" />

      </div>
    </main>
  )
}