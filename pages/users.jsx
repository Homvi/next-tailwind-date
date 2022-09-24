import React from 'react'
import User from '../components/User';

export const getStaticProps = async () => {
    const res = await fetch("http://localhost:3000/api/hello");
    const data = await res.json();

    return {
        props: { users: data.users },
    };
};

const users = ({ users }) => {
    return (
        <>
            <h1 className="text-center text-xl p-5">Users</h1>
            {users && users.map((user, id) => (<User user={user} key={id} />)
            )}
        </>
    )
}

export default users