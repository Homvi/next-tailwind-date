import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';



export default function Navbar() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <>
            <nav className='flex justify-between align-middle bg-gray-800 text-white' >
                <Link href={"/"}>
                    <h1 className='p-3 text-xl border-l hover:cursor-pointer' >DateNow</h1>
                </Link>
                <AiOutlineMenu size={30} className="text-white m-3 md:hidden" onClick={toggleMobileMenu} />

                <ul className='hidden  md:flex' >
                    <li className='p-3 hover:text-neutral-300 '>
                        <Link href={"/login"} >
                            Bejelentkezés
                        </Link>
                    </li>
                    <li className='p-3  hover:text-neutral-300'>
                        <Link href={"/registration"} >
                            Regisztráció
                        </Link>
                    </li>
                    <li className='p-3  hover:text-neutral-300'>
                        <Link href={"/users"} >
                            Felhasználók
                        </Link>
                    </li>
                </ul>

            </nav>
            <div className={isMobileMenuOpen ? " ease-out duration-300 text-white h-screen z-10   w-screen  bg-gray-800 fixed top-0 left-0  " : "ease-out duration-300 h-screen  z-10  align-middle  bg-gray-600 text-white fixed top-0 left-[-150%]"}>
                <div className="flex justify-end">
                    <AiOutlineClose size={30} className="cursor-pointer text-white m-3" onClick={toggleMobileMenu} >Close</AiOutlineClose>
                </div>
                <ul className="text-white flex  h-screen w-screen justify-center flex-col items-center" >
                    <li onClick={toggleMobileMenu} className='p-3 hover:text-neutral-300 '>
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
