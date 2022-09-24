import React from 'react'
import User from '../components/User';

export const getStaticProps = async () => {

    const res = await fetch("https://next-date.netlify.app/api/hello");
    const data = await res.json();

    return {
        props: { users: data.users },
    };

};

const users = ({ users }) => {
    return (
        <>
            <h1 className="text-center text-xl p-5">Felhasználók</h1>
            <div className="p-2">
                {users && users.map((user, id) => (<User user={user} key={id} />)
                )}
            </div>
        </>
    )
}

export default users