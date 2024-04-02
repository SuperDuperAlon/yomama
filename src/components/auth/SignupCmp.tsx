'use client'

import { userService } from '@/services/user.service';
import { useState } from 'react'

const SignUpCmp: React.FC = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(username, email, password);
        
        userService.signUp(username, email, password)

    };

    return (
        <form onSubmit={handleSignUp}>
            <div>
                Please Sign up
            </div>
            <div>
                <label></label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
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
        </form>
    )
}

export default SignUpCmp