import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const withAuth = Component => props => {
    const { user } = useAuth();

    if (!user)
        return (
            <div className='container'>
                <div className='not-user'>
                    <p>You are not authorized to view this page.</p>
                    <Link to='/'>Back</Link>
                </div>
            </div>
        );
    return <Component {...props} />;
};
