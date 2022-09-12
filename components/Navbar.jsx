import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';



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
                <button className="text-white m-3 md:hidden" onClick={toggleMobileMenu} >menu</button>

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

            </nav>
            <div className={isMobileMenuOpen ? " ease-in duration-300 text-white h-screen flex items-center justify-center  w-screen  bg-black fixed top-0 left-0" : "  ease-in duration-300 h-screen  items-center justify-center  align-middle  bg-black text-white fixed top-0 left-[-100%] "}>
                <ul className="text-white flex  h-screen w-screen justify-center flex-col items-center" >
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
            </div>
            <button className={isMobileMenuOpen ? "fixed right-2 top-2 text-white m-3  " : "fixed right-3 top-3 text-white m-3 hidden"} onClick={toggleMobileMenu} >Close</button>
        </>
    )
}
