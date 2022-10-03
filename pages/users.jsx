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
            <div className="p-3 bg-white grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 max-w-[1240px] mx-auto">
                {users && users.map((user, id) => {
                    return (
                        <>
                            <User user={user} key={user.id} />
                        </>
                    )
                })
                }
            </div>
        </>
    )
}

export default users