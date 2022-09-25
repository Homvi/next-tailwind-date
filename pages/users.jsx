import React from 'react'
import User from '../components/User';

export const getServerSideProps = async () => {
    const res = await fetch("https://next-date.netlify.app/api/hello");
   // const res = await fetch("http://localhost:3000/api/hello");
    let data = await res.json();

    return {
        props: { users: data.users },
    };
};

const users = ({ users }) => {
    return (
        <>
            <h1 className="text-center text-xl p-5">Felhasználók</h1>
            <div className="p-2">
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