'use client'

// components/Login.tsx
import { useState } from 'react';
import { userService } from '@/services/user.service'
// import { useMutation } from 'react-query';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //   const loginMutation = useMutation(
    //     async () => {
    //       return appwrite.account.createSession(email, password);
    //     },
    //     {
    //       onSuccess: () => {
    //         // Redirect or perform any actions after successful login
    //       },
    //     }
    //   );



    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        await userService.login(email, password)
        // loginMutation.mutate();
    };

    return (
        <form onSubmit={handleLogin}>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <button type="submit"
            //   disabled={loginMutation.isLoading}
            >
                {/* {loginMutation.isLoading ? 'Logging in...' : 'Login'} */}
                Submit
            </button>
        </form>
    );
};

export default Login;