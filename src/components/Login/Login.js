import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const { setIsLoading, signInUsingGoogle, setUser, setError } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
                setUser(result.user);
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <div className='d-flex justify-content-center mt-5'>
            <div className="card p-3 m-lg-5">
                <div className="card-body m-lg-5 text-center">
                    <button className='btn btn-success mb-3' onClick={handleGoogleLogin}>
                        Continue with Google</button>
                </div>

            </div>
        </div>
    );
};

export default Login;