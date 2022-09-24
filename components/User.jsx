import React from 'react'

const User = ({ user }) => {
    return (
        <>
            <div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-[7rem]">
                <div className="px-6">
                    <div className="flex flex-wrap justify-center ">
                        <div className="w-full flex justify-center">
                            <div className="relative flex justify-center">
                                <img alt='image' src={user.profilePhoto} className="shadow-xl rounded-full align-middle border-none absolute -m-16  lg:-ml-16 max-w-[150px] max-h-[150px]" />
                            </div>
                        </div>
                        <div className="w-full text-center mt-20">
                            <div className="flex justify-center lg:pt-4 pt-8 pb-0">
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