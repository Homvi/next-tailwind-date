import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import Image from 'next/image'
import Logo from "../public/assets/img/mouth.svg"



export default function Navbar() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <>
            <nav className='flex z-30 overflow-hidden shadow-lg relative w-screen justify-between align-middle bg-white/90 text-gray-900' >
                <Link href={"/"}>
                    <div id="logoContainer" className='h-max mx-4 w-[70px] flex my-auto cursor-pointer'>
                        <Image objectFit='contain' alt='image' src={Logo} />
                    </div>
                </Link>
                <AiOutlineMenu size={30} className="text-red-800 m-3 md:hidden" onClick={toggleMobileMenu} />
                <ul className='hidden  md:flex' >
                    <li className='p-3 hover:text-slate-600  m-1  mr-5  text-slate-900  rounded-full'>
                        <Link href={"/login"} >
                            Bejelentkezés
                        </Link>
                    </li>
                    <li className='p-3  hover:text-slate-600  m-1  mr-5 text-slate-900 rounded-full'>
                        <Link href={"/registration"} >
                            Regisztráció
                        </Link>
                    </li>
                    <li className='p-3  hover:text-slate-600  m-1 mr-5 text-slate-900  rounded-full'>
                        <Link href={"/users"} >
                            Felhasználók
                        </Link>
                    </li>
                </ul>

            </nav>
            <div className={isMobileMenuOpen ? " ease-out duration-300 text-red-700 h-screen z-40   w-screen  bg-white fixed top-0 left-0  " : "ease-out duration-300 h-screen  z-10  align-middle  bg-gray-600 text-red-700 fixed top-0 left-[-150%]"}>
                <div className="flex justify-end">
                    <AiOutlineClose size={30} className="cursor-pointer text-red-700 m-3" onClick={toggleMobileMenu} >Close</AiOutlineClose>
                </div>
                <ul className="text-red-700  flex  font-bold h-screen w-screen justify-center flex-col items-center" >
                    <li onClick={toggleMobileMenu} className='p-3  hover:text-neutral-300 '>
                        <Link href={"/login"} >
                            Bejelentkezés
                        </Link>
                    </li>
                    <li onClick={toggleMobileMenu} className='p-3  hover:text-neutral-300'>
                        <Link href={"/registration"} >
                            Regisztráció
                        </Link>
                    </li>
                    <li onClick={toggleMobileMenu} className='p-3  hover:text-neutral-300'>
                        <Link href={"/users"} >
                            Felhasználók
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
