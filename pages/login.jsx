import React, { useState } from 'react'

const login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    let validE = false


    //email validation
    const validateEmail = () => {
        let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        validE = regex.test(email)
        console.log("Value of valid in validate email: ", validE);
    }


    const handleSubmit = () => {
        console.log("The email is: ", email);
        console.log("The password is:  ", password);
        validateEmail(email)
        let emailInput = document.getElementById("loginEmail")
        if (validE) {
            setEmail("")
            emailInput.style.border = "2px solid green"
        }
        if (!validE) {
            emailInput.style.border = "2px solid red"
        }
        setPassword("")
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        console.log(validE);
    }


    const handlePassword = (e) => {
        setPassword(e.target.value);
    }


    return (
        <>
            <h1 className='text-3xl flex justify-center m-3 relative z-0'  >Bejelentkezés</h1>
            <form action="#" className="max-w-[500px] relative bg-slate-100 p-5 z-0 drop-shadow-lg mx-auto grid grid-rows-3 grid-flow-col gap-4 " >
                <input id='loginEmail' type="email" value={email} placeholder='E-mail' className={validE ? 'drop-shadow-md p-2 mt-1 mx-5 bg-black' : 'drop-shadow-md p-2 mt-1 mx-5'} onChange={e => handleEmail(e)} />
                <input type="password" value={password} autoComplete='true' placeholder='Jelszó' className='drop-shadow-md p-2 mt-1 mx-5' onChange={e => handlePassword(e)} />
                <div className="flex space-x-2 justify-center">
                    <button onClick={handleSubmit} type="button" className="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-600 active:shadow-lg transition duration-150 ease-in-out">Bejelentkezés</button>
                </div>
            </form>
        </>
    )
}

export default login