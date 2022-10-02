import React, { useState } from 'react'
import Image from 'next/image'
import BCG from "../public/assets/img/bcg.svg"

const login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    //On click submit button
    const handleSubmit = () => {
        console.log("The email is: ", email);
        console.log("The password is:  ", password);
        const emailAlert = document.getElementById("emailAlertLogin")
        const passwordAlert = document.getElementById("passwordAlertLogin")
        const wrongPassOrEmailAlert = document.getElementById("wrongPassOrEmailAlert")
        if (email.length < 3) {
            emailAlert.classList.remove("hidden")
        }
        if (password.length < 4) {
            passwordAlert.classList.remove("hidden")
        }
        if (password.length >= 4) {
            passwordAlert.classList.add("hidden")
        }
        if (email.length >= 3) {
            emailAlert.classList.add("hidden")
        }
        if (email.length >= 3 && password.length >= 4) {
            wrongPassOrEmailAlert.classList.remove("hidden")
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);

    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <>
            <form action="#" className="max-w-[700px] h-screen relative text-gray-900   z-20 drop-shadow-sm bg-white/90  p-5 flex flex-col  mx-auto sm:mt-10  sm:h-fit md:rounded-lg" >
                <h1 className='text-3xl flex justify-center m-3 text-gray-900/90 uppercase  relative z-0 mt-5'  >Bejelentkezés</h1>
                <div className="mb-2">
                    <label htmlFor="emailInput" className="block mb-2 text-sm font-medium">E-mail</label>
                    <input value={email} onChange={e => handleEmail(e)} type="email" id="emailInput" className=" text-sm rounded-lg  block w-full p-2.5" placeholder="example@example.com" />
                    <p id="emailAlertLogin" className="mt-1 text-sm text-red-600 dark:text-red-500 hidden"> <span className="font-medium">Add meg az email címed a bejelentkezéshez</span>
                    </p>
                </div>
                <div className="mb-2">
                    <label htmlFor="passwordInput" className="block mb-2 text-sm font-medium">Jelszó</label>
                    <input autoComplete='true' type="password" id="passwordInput" className=" text-sm rounded-lg  block w-full p-2.5" onChange={e => handlePassword(e)} placeholder="Jelszó" />
                    <p id='passwordAlertLogin' className="mt-1 text-sm text-red-600 dark:text-red-500 hidden"> <span className="font-medium">Add meg az emailhez tartozó jelszót</span>
                    </p>
                </div>
                <p id='wrongPassOrEmailAlert' className="mt-1 text-sm text-red-600 dark:text-red-500 text-center hidden">Helytelen felhasználónév vagy jelszó
                </p>
                <div className="flex space-x-2 justify-center mt-5">
                    <button onClick={handleSubmit} type="button" className="transform rounded-md bg-[#ea030f] hover:text-red-900 px-5 py-3 font-medium text-white transition-colors hover:bg-white/90 duration-300">Bejelentkezés</button>
                </div>
            </form>
            <div id="background" className="h-[110%] w-screen absolute top-0 left-0 z-[10] bg-black ">
                <Image layout="fill" objectFit='cover' alt='image' src={BCG} />
            </div>
        </>
    )
}

export default login