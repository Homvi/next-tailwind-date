import Link from 'next/link';
import React from 'react'

const registration = () => {

    const handleSubmit = () => {
        console.log("The form has been submitted");
    }

    return (
        <>
            <h1 className='text-3xl flex justify-center m-3 relative z-0'  >Regisztráció</h1>
            <form action="#" className="max-w-[700px] relative z-0 drop-shadow-sm bg-slate-100 p-5 flex flex-col mx-auto" >
                <input type="text" placeholder='Vezetéknév' className='drop-shadow-md p-2 mt-1 mx-5' />
                <input type="text" placeholder='Keresztnév' className='drop-shadow-md p-2 mt-1 mx-5' />
                <input type="text" placeholder='felhasználónév' className='drop-shadow-md p-2 mt-1 mx-5' />
                <input type="email" placeholder='e-mail' className='drop-shadow-md p-2 mt-1 mx-5' />
                <input autoComplete='true' type="password" placeholder='Válassz jelszót' className='drop-shadow-md p-2 mt-1 mx-5' />
                <div className="form-check flex justify-center  m-4 p-2 ">
                    <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                        Elolvastam és elfogadom az <span className='underline decoration-1' ><Link href="/termsofuse"  > Felhasználási feltételeket </Link></span> és az <span className='underline decoration-1' ><Link href="/privacypolicy">adatkezelési tájékoztató</Link></span> ban leírtakat.
                    </label>
                    <div className="check flex flex-col justify-end">
                        <input className="form-check-input appearance-none h-5 w-5 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                    </div>
                </div>
                <div className="flex space-x-2 justify-center">
                    <button onClick={handleSubmit} type="button" className="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-600 active:shadow-lg transition duration-150 ease-in-out">Regisztrálok</button>
                </div>
            </form>
        </>
    )
}

export default registration