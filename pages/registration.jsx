import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { validateEmail, toggleAlert } from "../validation"
import Image from 'next/image'
import BCG from "../public/assets/img/bcg.svg"


const registration = () => {

    const [email, setEmail] = useState("")
    const [lastName, setLastName] = useState("")
    const [firstName, setFirstName] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [isCheckBoxChecked, setIsCheckBoxChecked] = useState(false)
    const [newUser, setNewUser] = useState({});

    const handleSubmit = () => {
        toggleAlert('lastNameInput', "lastNameAlertReg")
        toggleAlert('FirstNameInput', "firstNameAlertReg")
        toggleAlert('userNameInput', "userNameAlertReg")
        toggleAlert('emailInput', "emailAlertReg")
        toggleAlert('passwordInput', "passwordAlertReg")

        let newUserObj = {
            lastName: lastName,
            firstName: firstName,
            userName: userName,
            email: email,
            password: password
        }
        setNewUser(newUserObj)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        validateEmail("emailInput")
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const handleUserName = (e) => {
        setUserName(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleCheckBox = (e) => {
        setIsCheckBoxChecked(e.target.checked)
    }

    useEffect(() => {
        console.log(newUser);
        console.log("The checkbox is checked ?", isCheckBoxChecked);
    }, [newUser, isCheckBoxChecked])


    return (
        <>
            <form action="#" className="max-w-[700px] text-gray-900  relative  z-20 drop-shadow-sm bg-white/90 p-5 flex flex-col mx-auto xs:p-5 sm:mt-10 md:rounded-lg" >

                <h1 className='text-3xl text-gray-900/90 uppercase flex justify-center m-3 relative z-0'  >Regisztráció</h1>

                {/*  Last name */}
                <div className="mb-2">
                    <label htmlFor="lastNameInput" className="block mb-2 text-sm font-medium">Vezetéknév</label>
                    <input value={lastName} onChange={e => handleLastName(e)} type="text" id="lastNameInput" className=" text-sm rounded-lg  block w-full p-2.5" placeholder="Vezetéknév" />
                    <p id='lastNameAlertReg' className="mt-2 text-sm text-red-600 dark:text-red-500 hidden"> A vezeténév mező kitöltése kötelező!
                    </p>
                </div>

                {/* First name */}
                <div className="mb-2">
                    <label htmlFor="FirstNameInput" className="block mb-2 text-sm font-medium">Keresztnév</label>
                    <input value={firstName} onChange={e => handleFirstName(e)} type="text" id="FirstNameInput" className=" text-sm rounded-lg  block w-full p-2.5" placeholder="Keresznév" />
                    <p id='firstNameAlertReg' className="mt-1 text-sm text-red-600 dark:text-red-500 hidden"><span className="font-medium">Hoppá!</span> A keresztnév megadása kötelező!
                    </p>
                </div>

                {/* username */}
                <div className="mb-2">
                    <label htmlFor="userNameInput" className="block mb-2 text-sm font-medium">Felhasználónév</label>
                    <input value={userName} onChange={e => handleUserName(e)} type="text" id="userNameInput" className=" text-sm rounded-lg  block w-full p-2.5" placeholder="Válassz felhasználónevet!" />
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
                    <input value={password} onChange={e => handlePassword(e)} autoComplete='true' type="password" id="passwordInput" className=" text-sm rounded-lg  block w-full p-2.5" placeholder="Jelszó" />
                    <p id='passwordAlertReg' className="mt-1 text-sm text-red-600 dark:text-red-500 hidden">A jelszónak legalább 5 karakter hosszúnak kell lennie és tartalmaznia kell nagybetűt és kisbetűt valamint számot.
                    </p>
                </div>

                {/* Privacy policy */}
                <div className="form-check flex justify-center  m-2 mb-5">
                    <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                        Elolvastam és elfogadom az <span className='underline decoration-1' ><Link href="/termsofuse"  > Felhasználási feltételeket </Link></span> és az <span className='underline decoration-1' ><Link href="/privacypolicy">adatkezelési tájékoztató</Link></span> ban leírtakat.
                    </label>
                    <label className="inline-flex items-center mt-3">
                        <input onChange={e => handleCheckBox(e)} type="checkbox" className="form-checkbox h-5 w-5 text-pink-600" /><span className="ml-2 text-gray-700"></span>
                    </label>
                </div>

                {/* Submit Button */}
                <div className="flex space-x-2 justify-center">
                    <button onClick={handleSubmit} type="button" className="transform rounded-md bg-[#ea030f]  px-5 py-3 font-medium text-white transition-colors  duration-300">Regisztrálok</button>
                </div>

            </form>
            <div id="background" className="h-[180%] w-screen absolute top-0 left-0 z-[10] bg-black ">
                <Image layout="fill" objectFit='cover' alt='image' src={BCG} />
            </div>

        </>
    )
}

export default registration