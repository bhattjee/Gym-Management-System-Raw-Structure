import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/signup/', { username, email, password, phone_number, address });
            localStorage.setItem('token', response.data.token);
            alert('Signed up successfully');
        } catch (error) {
            alert('Sign up failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <input type="text" value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" />
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default Signup;