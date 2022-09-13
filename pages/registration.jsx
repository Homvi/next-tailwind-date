import React from 'react'

const registration = () => {

    const handleSubmit = () => {
        console.log("The form has been submitted");
    }

    return (
        <>
            <h1 className='text-3xl flex justify-center m-3 relative z-0'  >Regisztráció</h1>
            <form action={handleSubmit} className="max-w-[500px] relative z-0 drop-shadow-sm bg-slate-100 p-5 mx-auto grid grid-rows-6 grid-flow-col gap-4 " >
                <input type="text" placeholder='Vezetéknév' className='drop-shadow-md p-2 mt-1 mx-5' />
                <input type="text" placeholder='Keresztnév' className='drop-shadow-md p-2 mt-1 mx-5' />
                <input type="text" placeholder='felhasználónév' className='drop-shadow-md p-2 mt-1 mx-5' />
                <input type="email" placeholder='e-mail' className='drop-shadow-md p-2 mt-1 mx-5' />
                <input type="password" placeholder='Válassz jelszót' className='drop-shadow-md p-2 mt-1 mx-5' />
                <div class="flex space-x-2 justify-center">
                    <button onClick={handleSubmit} type="button" class="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-600 active:shadow-lg transition duration-150 ease-in-out">Regisztrálok</button>
                </div>
            </form>
        </>
    )
}

export default registration