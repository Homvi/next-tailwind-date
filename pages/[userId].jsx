import React from 'react'
import { useRouter } from 'next/router'

const userId = ({ users }) => {
    let router = useRouter();
    let userId = router.query.userId

    console.log(users);

    return (
        <>
            <div>These are the details of user {userId} </div>
        </>
    )
}

export default userId