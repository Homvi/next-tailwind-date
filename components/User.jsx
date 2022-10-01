import React from 'react'
import Image from 'next/image'

const User = ({ user }) => {
    return (
        <>
            <div className="relative bg-white/90 shadow-2xl max-w-md mx-auto md:max-w-2xl min-w-0 break-words w-full mb-6 rounded-xl mt-[7rem]">
                <div className="px-6">
                    <div className="flex w-full relative">
                        <div className="flex w-full justify-center relative">
                            <div className="flex w-full relative justify-center ">
                                <div className="relative shadow-2xl mt-[-80px] h-40 w-40 rounded-full bg-black">
                                    <Image layout='fill' objectFit='cover' alt='image' src={user.profilePhoto} className=" rounded-full align-middle border-none absolute -m-16  lg:-ml-16 max-w-[150px] max-h-[150px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-2">
                        <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">{user.lastName} {user.firstName}</h3>
                        <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                            <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>{user.city}
                        </div>
                    </div>
                    <div className="mt-6 py-6 border-t border-slate-200 text-center">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full px-4">
                                <p className="font-light leading-relaxed text-slate-600 mb-4">{user.desc}</p>
                                <a href="javascript:;" className="font-normal text-slate-700 hover:text-slate-400">Részletek</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User