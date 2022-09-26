import React from 'react'
import User from '../components/User';

export const getServerSideProps = async () => {
    const res = await fetch("https://next-date.netlify.app/api/hello");
    let data = await res.json();

    return {
        props: { users: data.users },
    };
};

const users = ({ users }) => {
    return (
        <>
            <h1 className="text-center text-xl p-5">Regisztrált felhasználók</h1>
            <div className="p-3  grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 max-w-[1240px] mx-auto">
                {users && users.map((user, id) => {
                    return (
                        <>
                            <User user={user} key={id} />
                        </>
                    )
                })
                }
            </div>
        </>
    )
}

export default users