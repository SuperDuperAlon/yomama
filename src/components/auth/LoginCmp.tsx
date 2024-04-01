'use client'

import { useState } from 'react';
import { userService } from '@/services/user.service'
import Link from 'next/link';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        await userService.login(email, password)
    };

    return (
        <form onSubmit={handleLogin}>
            <div>
                Please login
            </div>
            <div>
                <label></label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
            </div>
            <div>
                <label></label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
            </div>

            <button type="submit">
                Submit
            </button>
            <div>not a user? <Link href="/auth/signup">Sign up here</Link></div>
        </form>
    );
};

export default Login;