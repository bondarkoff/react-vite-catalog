import React from 'react';
import { useAuth } from '../../hooks/useAuth';

const Header = () => {
    const { user, setUser } = useAuth();

    return user ? (
        <div className='user'>
            <h2>Welcome, {user.name}!</h2>
            <button className='user-btn' onClick={() => setUser(null)}>
                Logout
            </button>
        </div>
    ) : (
        <button className='user-btn' onClick={() => setUser({ name: 'Yehor' })}>
            Login
        </button>
    );
};

export default Header;
