import React from 'react'
import { Home, User, Layers, LayoutList, Briefcase, Terminal, MessageSquare } from 'lucide-react'

interface SideMenuProps {
  activeTab?: 'home' | 'aboutme' | 'eduexp' | 'spec' | 'projects' | 'skills' | 'contactme';
}

export default function SideMenu({ activeTab = 'home' }: SideMenuProps) {
  const menuItems = [
    { icon: <Home size={18} />, id: 'home' },
    { icon: <User size={18} />, id: 'aboutme' },
    { icon: <Layers size={18} />, id: 'eduexp' },
    { icon: <LayoutList size={18} />, id: 'spec' },
    { icon: <Briefcase size={18} />, id: 'projects' },
    { icon: <Terminal size={18} />, id: 'skills' },
    { icon: <MessageSquare size={18} />, id: 'contactme' },
  ]

  return (
    // ปรับระยะ gap และ padding ให้เล็กลง
    <nav className="fixed right-5 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 bg-[#1e1e1e]/60 backdrop-blur-md p-3 rounded-full border border-white/10 z-50">
      {menuItems.map((item) => (
        <button
          key={item.id}
          className={`p-2.5 rounded-full transition-all duration-300 hover:scale-110 ${
            activeTab === item.id 
            ? 'text-orange-500 border border-orange-500/40 bg-orange-500/10' 
            : 'text-gray-500 hover:text-white'
          }`}
        >
          {item.icon}
        </button>
      ))}
    </nav>
  )
}