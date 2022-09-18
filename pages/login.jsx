import React, { useState } from 'react'
import { validateEmail } from "../validation"

const login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    //On click submit button
    const handleSubmit = () => {
        console.log("The email is: ", email);
        console.log("The password is:  ", password);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        validateEmail("emailInput")
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <>
            <form action="#" className="max-w-[700px] relative z-0 drop-shadow-sm bg-slate-100 p-5 flex flex-col mx-auto xs:p-5 sm:mt-5" >
                <h1 className='text-3xl flex justify-center m-3 relative z-0'  >Bejelentkezés</h1>
                <div className="mb-2">
                    <label htmlFor="emailInput" className="block mb-2 text-sm font-medium">E-mail</label>
                    <input value={email} onChange={e => handleEmail(e)} type="email" id="emailInput" className=" text-sm rounded-lg  block w-full p-2.5" placeholder="example@example.com" />
                    <p className="mt-1 text-sm text-red-600 dark:text-red-500 hidden">Kérlek adj meg egy valódi e-mail címet ahol elérhetünk!
                    </p>
                </div>
                <div className="mb-2">
                    <label htmlFor="passwordInput" className="block mb-2 text-sm font-medium">Jelszó</label>
                    <input autoComplete='true' type="password" id="passwordInput" className=" text-sm rounded-lg  block w-full p-2.5" onChange={e => handlePassword(e)} placeholder="Jelszó" />
                    <p className="mt-1 text-sm text-red-600 dark:text-red-500 hidden">A jelszónak legalább 5 karakter hosszúnak kell lennie és tartalmaznia kell nagybetűt és kisbetűt valamint számot.
                    </p>
                </div>
                <div className="flex space-x-2 justify-center mt-5">
                    <button onClick={handleSubmit} type="button" className="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-600 active:shadow-lg transition duration-150 ease-in-out">Bejelentkezés</button>
                </div>
            </form>
        </>
    )
}

export default login