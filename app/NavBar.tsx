'use client'
import React from 'react'
import Link from 'next/link'
import { PiMathOperations } from "react-icons/pi"
import { usePathname } from 'next/navigation'
import SignIn from './components/SignIn'
const NavBar = () => {
    const currentPath=usePathname();
  return (
    <div>
    <nav className="flex space-x-10 p-4 items-center mb-6 h-17 bg-cyan-700">
        <Link className="text-orange-500 text-6xl " href="/"><PiMathOperations /></Link>
        <div className="navbar">
            <ul className="flex space-x-11">
                <li><Link href="/solve" className={`${"/solve"===currentPath ? "underline":""} navbar underline-offset-8`}>Solve</Link></li>
                <li><Link href="/ask" className={`${"/ask"===currentPath ? "underline":""} navbar underline-offset-8`}>Ask</Link></li>
                {/* <li><Link href="/achievements" className={`${"/achievements"===currentPath ? "underline":""} navbar underline-offset-8`}>Achievements</Link></li> */}
                <li><Link href="/workspace" className={`${"/workspace"===currentPath ? "underline":""} navbar underline-offset-8`}>Workspace</Link></li>
            </ul>

        </div>
        <div className='w-9/12 flex items-end'><SignIn/></div>

    </nav>
    </div>
  )
}

export default NavBar
