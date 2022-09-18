import Link from 'next/link';
import React, { useState } from 'react'
import { validateEmail } from "../validation"

const registration = () => {

    const [email, setEmail] = useState("")

    const handleSubmit = () => {
        console.log("The form has been submitted");
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        validateEmail("registrationEmailInput")
    }

    return (
        <>
            <form action="#" className="max-w-[700px] relative z-0 drop-shadow-sm bg-slate-100 p-5 flex flex-col mx-auto xs:p-5 sm:mt-10" >

                <h1 className='text-3xl flex justify-center m-3 relative z-0'  >Regisztráció</h1>

                {/*  Last name */}
                <div className="mb-2">
                    <label htmlFor="lastNameInput" className="block mb-2 text-sm font-medium">Vezetéknév</label>
                    <input type="text" id="lastNameInput" className=" text-sm rounded-lg  block w-full p-2.5" placeholder="Vezetéknév" />
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500 hidden"><span className="font-medium">Hoppá!</span> A vezeténév mező kitöltése kötelező!
                    </p>
                </div>

                {/* First name */}
                <div className="mb-2">
                    <label htmlFor="FirstNameInput" className="block mb-2 text-sm font-medium">Keresztnév</label>
                    <input type="text" id="FirstNameInput" className=" text-sm rounded-lg  block w-full p-2.5" placeholder="Keresznév" />
                    <p className="mt-1 text-sm text-red-600 dark:text-red-500 hidden"><span className="font-medium">Hoppá!</span> A keresztnév megadása kötelező!
                    </p>
                </div>

                {/* username */}
                <div className="mb-2">
                    <label htmlFor="userNameInput" className="block mb-2 text-sm font-medium">Felhasználónév</label>
                    <input type="text" id="userNameInput" className=" text-sm rounded-lg  block w-full p-2.5" placeholder="Válassz felhasználónevet!" />
                    <p className="mt-1 text-sm text-red-600 dark:text-red-500 hidden"><span className="font-medium">Hoppá!&nbsp;</span> Ez a felhasználónév már foglat!
                    </p>
                </div>

                {/* email */}
                <div className="mb-2">
                    <label htmlFor="emailInput" className="block mb-2 text-sm font-medium">E-mail</label>
                    <input value={email} onChange={e => handleEmail(e)} type="email" id="emailInput" className=" text-sm rounded-lg  block w-full p-2.5" placeholder="example@example.com" />
                    <p className="mt-1 text-sm text-red-600 dark:text-red-500 hidden">Kérlek adj meg egy valódi e-mail címet ahol elérhetünk!
                    </p>
                </div>

                {/* Password */}
                <div className="mb-2">
                    <label htmlFor="passwordInput" className="block mb-2 text-sm font-medium">Jelszó</label>
                    <input autoComplete='true' type="password" id="passwordInput" className=" text-sm rounded-lg  block w-full p-2.5" placeholder="Jelszó" />
                    <p className="mt-1 text-sm text-red-600 dark:text-red-500 hidden">A jelszónak legalább 5 karakter hosszúnak kell lennie és tartalmaznia kell nagybetűt és kisbetűt valamint számot.
                    </p>
                </div>

                {/* Privacy policy */}
                <div className="form-check flex justify-center  m-2 mb-5">
                    <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                        Elolvastam és elfogadom az <span className='underline decoration-1' ><Link href="/termsofuse"  > Felhasználási feltételeket </Link></span> és az <span className='underline decoration-1' ><Link href="/privacypolicy">adatkezelési tájékoztató</Link></span> ban leírtakat.
                    </label>
                    <div className="check flex flex-col justify-end">
                        <input className="form-check-input appearance-none h-5 w-5 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                    </div>
                </div>

                {/* Submit Button */}
                <div className="flex space-x-2 justify-center">
                    <button onClick={handleSubmit} type="button" className="inline-block px-8 py-3 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-600 active:shadow-lg transition duration-150 ease-in-out">Regisztrálok</button>
                </div>

            </form>
        </>
    )
}

export default registration