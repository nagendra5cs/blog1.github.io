"use client"
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const menuItems = [
    {
      'id': 1,
      'item': 'Home',
      'slug': ''
    },
    {
      'id': 2,
      'item': 'Services',
      'slug': 'services'
    },
    {
      'id': 3,
      'item': 'About',
      'slug': 'about'
    },
    {
      'id': 4,
      'item': 'Contact',
      'slug': 'contact'
    },
  ]
  return (
    <>
      <header className=" bg-blue-700 text-white font-serif">
        <div className=" max-w-[1280px] m-auto py-4 relative md:flex md:items-center md:justify-between">
          <Link href='/' className="text-3xl px-3 capitalize">
            <span className="bg-white text-blue-700 py-1 px-2 mr-2 rounded-lg">Uclean</span>Company</Link>
          <nav className={menu ? 'block' : 'hidden md:block'}>
            <div className="flex flex-col pt-3 md:pt-0 md:flex-row">
              {menuItems.map((i) => (
                <Link href={`/${i.slug}`} key={i.id} className="px-3 text-xl capitalize hover:text-white/[0.9]">{i.item}</Link>
              ))}
            </div>
          </nav>
          <button className="text-3xl absolute top-4 right-3 md:hidden" onClick={() => setMenu(!menu)}>&#9776;</button>
        </div>
      </header>
    </>
  )
}