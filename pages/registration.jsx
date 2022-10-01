import Link from 'next/link';
import React, { useState } from 'react'
import { validateEmail, toggleAlert } from "../validation"
import Image from 'next/image'
import BCG from "../public/assets/img/bcg.svg"


const registration = () => {

    const toggleAlert = (idOfInput, idOfAlert) => {
        let alert = document.getElementById(idOfAlert)
        let Input = document.getElementById(idOfInput)
        let length = Input.value.toString().length
        if (length < 2) {
            alert.classList.remove("hidden")
        }
        if (length >= 2) {
            alert.classList.add("hidden")
        }
    }

    const [email, setEmail] = useState("")

    const handleSubmit = () => {
        toggleAlert('lastNameInput', "lastNameAlertReg")
        toggleAlert('FirstNameInput', "firstNameAlertReg")
        toggleAlert('userNameInput', "userNameAlertReg")
        toggleAlert('emailInput', "emailAlertReg")
        toggleAlert('passwordInput', "passwordAlertReg")
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        validateEmail("emailInput")
    }

    return (
        <>
            <form action="#" className="max-w-[700px] text-gray-900  relative  z-20 drop-shadow-sm bg-white/90 p-5 flex flex-col mx-auto xs:p-5 sm:mt-10 md:rounded-lg" >

                <h1 className='text-3xl text-gray-900/90 uppercase flex justify-center m-3 relative z-0'  >Regisztráció</h1>

                {/*  Last name */}
                <div className="mb-2">
                    <label htmlFor="lastNameInput" className="block mb-2 text-sm font-medium">Vezetéknév</label>
                    <input type="text" id="lastNameInput" className=" text-sm rounded-lg  block w-full p-2.5" placeholder="Vezetéknév" />
                    <p id='lastNameAlertReg' className="mt-2 text-sm text-red-600 dark:text-red-500 hidden"> A vezeténév mező kitöltése kötelező!
                    </p>
                </div>

                {/* First name */}
                <div className="mb-2">
                    <label htmlFor="FirstNameInput" className="block mb-2 text-sm font-medium">Keresztnév</label>
                    <input type="text" id="FirstNameInput" className=" text-sm rounded-lg  block w-full p-2.5" placeholder="Keresznév" />
                    <p id='firstNameAlertReg' className="mt-1 text-sm text-red-600 dark:text-red-500 hidden"><span className="font-medium">Hoppá!</span> A keresztnév megadása kötelező!
                    </p>
                </div>

                {/* username */}
                <div className="mb-2">
                    <label htmlFor="userNameInput" className="block mb-2 text-sm font-medium">Felhasználónév</label>
                    <input type="text" id="userNameInput" className=" text-sm rounded-lg  block w-full p-2.5" placeholder="Válassz felhasználónevet!" />
                    <p id='userNameAlertReg' className="mt-1 text-sm text-red-600 dark:text-red-500 hidden"><span className="font-medium">Hoppá!&nbsp;</span> Ez a felhasználónév már foglat!
                    </p>
                </div>

                {/* email */}
                <div className="mb-2">
                    <label htmlFor="emailInput" className="block mb-2 text-sm font-medium">E-mail</label>
                    <input value={email} onChange={e => handleEmail(e)} type="email" id="emailInput" className=" text-sm rounded-lg  block w-full p-2.5" placeholder="example@example.com" />
                    <p id='emailAlertReg' className="mt-1 text-sm text-red-600 dark:text-red-500 hidden">Kérlek adj meg egy valódi e-mail címet ahol elérhetünk!
                    </p>
                </div>

                {/* Password */}
                <div className="mb-2">
                    <label htmlFor="passwordInput" className="block mb-2 text-sm font-medium">Jelszó</label>
                    <input autoComplete='true' type="password" id="passwordInput" className=" text-sm rounded-lg  block w-full p-2.5" placeholder="Jelszó" />
                    <p id='passwordAlertReg' className="mt-1 text-sm text-red-600 dark:text-red-500 hidden">A jelszónak legalább 5 karakter hosszúnak kell lennie és tartalmaznia kell nagybetűt és kisbetűt valamint számot.
                    </p>
                </div>

                {/* Privacy policy */}
                <div className="form-check flex justify-center  m-2 mb-5">
                    <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                        Elolvastam és elfogadom az <span className='underline decoration-1' ><Link href="/termsofuse"  > Felhasználási feltételeket </Link></span> és az <span className='underline decoration-1' ><Link href="/privacypolicy">adatkezelési tájékoztató</Link></span> ban leírtakat.
                    </label>
                    <label className="inline-flex items-center mt-3">
                        <input type="checkbox" className="form-checkbox h-5 w-5 text-pink-600" /><span className="ml-2 text-gray-700"></span>
                    </label>
                </div>

                {/* Submit Button */}
                <div className="flex space-x-2 justify-center">
                    <button onClick={handleSubmit} type="button" className="inline-block px-8 py-3 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-600 active:shadow-lg transition duration-150 ease-in-out">Regisztrálok</button>
                </div>

            </form>
            <div id="background" className="h-[110%] w-screen absolute top-0 left-0 z-[10] bg-black ">
                <Image layout="fill" objectFit='cover' alt='image' src={BCG} />
            </div>

        </>
    )
}

export default registration