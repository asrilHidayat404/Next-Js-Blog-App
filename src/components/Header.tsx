"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
const links = [
  {
    lable: "Home",
    href: "/"
  },
  {
    lable: "Post",
    href: "/posts"
  },
  {
    lable: "Create Post",
    href: "/create-post"
  },
]
const Header = () => {
  const pathname = usePathname()
  return (
    <header className='flex justify-between py-3 px-7 border-b'>
      <h1>Logo.</h1>
      <nav>
        <ul className='flex items-center gap-x-10'>
          {
            links.map((link, i) => {
              return (
                <li key={i} className={`${pathname == link.href ? 'text-zinc-900' : 'text-zinc-400'}`}>
                  <Link href={link.href}>{link.lable}</Link>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header