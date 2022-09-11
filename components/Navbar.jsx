import Link from 'next/link'
import { useState } from 'react'



export default function Navbar() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <nav className='flex justify-between bg-gray-800 text-white' >
            <Link href={"/"}>
                <h1 className='p-3 text-xl border-l hover:cursor-pointer' >DateNow</h1>
            </Link>
            <ul className='hidden  md:flex' >
                <li className='p-3 hover:text-neutral-300 '>
                    <Link href={"/login"} >
                        Login
                    </Link>
                </li>
                <li className='p-3  hover:text-neutral-300'>
                    <Link href={"/registration"} >
                        Register
                    </Link>
                </li>
            </ul>
            <div className="h-screen ">
                
            </div>

        </nav>
    )
}
