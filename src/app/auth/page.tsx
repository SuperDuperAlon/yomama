// Check to see whether there's a user already logged in

import { useState } from "react"
import Login from '@/components/auth/LoginCmp'
import Logout from '@/components/auth/LogoutCmp'

const page = () => {
    
    {/* TODO: check user service is ready to go */}
    const user: boolean = false

    return (
        <section className="auth-page center">
            {user ? <Logout /> : <Login />}
        </section>
    )
}

export default page