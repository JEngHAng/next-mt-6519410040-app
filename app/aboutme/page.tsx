import React from "react";
import MyCard from "@/components/MyCard";
import SideMenu from "@/components/SideMenu";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#121212] flex items-center justify-center p-4 font-sans overflow-hidden">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-8 lg:gap-16">
        {/* ฝั่งซ้าย: Profile Card - ใช้ scale เพื่อลดขนาดลง 5-10% */}
        <div className="shrink-0 transform scale-95 origin-center">
          <MyCard />
        </div>

        {/* ฝั่งขวา: Content Section */}
        <div className="flex-1 text-white text-center md:text-left py-4">
          {/* ลดขนาดหัวข้อรอง */}
          <h2 className="text-xl md:text-2xl font-medium mb-4 tracking-[0.1em]">
            About <span className="text-orange-500">Me</span>
          </h2>

          <h1 className="text-lg md:text-[48px] font-bold leading-none tracking-[0.05em] mb-5 text-white">
            I find fulfillment in blending visual design with the power of
            coding to create meaningful experiences.
          </h1>

          <p className="text-gray-400 text-base md:text-lg max-w-xl mb-8 leading-relaxed font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            maxime tempora at neque a adipisci nulla voluptatem? Mollitia,
            officiis, architecto earum voluptates obcaecati corrupti voluptatem
            . Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            maxime tempora at neque a adipisci nulla voluptatem? Mollitia,
            officiis, architecto earum voluptates obcaecati corrupti voluptatem
            .
          </p>

        </div>

        {/* Sidebar Navigation - ส่ง activeTab="aboutme" เพื่อให้ไอคอนแรกสีส้ม */}
        <SideMenu activeTab="aboutme" />
      </div>
    </main>
  );
}
