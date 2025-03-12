
import React, { useState } from 'react';

function RegistrationForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        let isValid = true;
        const newErrors = {};

        if (!username.trim()) {
            newErrors.username = 'Username is required.';
            isValid = false;
        }

        if (!email.trim()) {
            newErrors.email = 'Email is required.';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Invalid email format.';
            isValid = false;
        }

        if (!password.trim()) {
            newErrors.password = 'Password is required.';
            isValid = false;
        }

        setErrors(newErrors);

        if (isValid) {
            // Simulate API call (replace with actual API call)
            console.log('Form submitted:', { username, email, password });
            setUsername('');
            setEmail('');
            setPassword('');
            setErrors({}); // Clear errors on successful submission
        }
    };

    return (
        <div>
            <h2>Registration Form (Controlled Components)</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegistrationForm;
