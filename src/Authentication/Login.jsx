
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { sendPasswordResetEmail } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import { useContext, useRef, useState } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const { handleLogin, handleGoogleLogin } = useContext(authContext)
    const [errorMessage, setErrorMessage] = useState()
    const [showPassword, setShowPassword] = useState(false)
    const location = useLocation()
    console.log(location.pathname)
    const navigate = useNavigate()
    const ref = useRef()


    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = e.target.email.value
        const password = e.target.password.value


        handleLogin(email, password)
            .then(res => {
                form.reset()

                navigate(location.state.from)


            })
            .catch(error => {
                console.log(error)
                const simplifiedError = error.message.match(/\(([^)]+)\)/)?.[1]?.replace('auth/', '');
                setErrorMessage(simplifiedError || 'An unexpected error occurred');
            })
    }

    const handleGoogle = () => {
        handleGoogleLogin()
            .then(res => {

                navigate(location.state.from)


            })
    }
    

    return (
        <div>

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-10">
                <div className='text-center mt-5'>
                    <h2 class="text-xl font-semibold">LOGIN / SIGN UP</h2>
                    <div class="mt-2 w-52 border-t-2 border-green-500 mx-auto"></div>
                </div>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input ref={ref} name='email' type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' type={showPassword ? 'text' : 'password'} placeholder="password" className="input input-bordered" required />
                        <button onClick={() => setShowPassword(!showPassword)} className='absolute right-6 top-12'>
                            {
                                showPassword ? <FaEye /> : <FaEyeSlash />
                            }
                        </button>
                      
                        {
                            errorMessage && <p className='text-red-500'>{errorMessage}</p>
                        }
                    </div>

                    <div className="form-control mt-2">
                        <button className="btn  bg-[#b8dae6]">Login</button>
                    </div>
                    <p className='px-5'>Don't have an account! Please <span className='text-green-400 link link-hover'><Link to='/register'>Register</Link></span></p>

                </form>
                <div className='flex flex-col justify-center px-9 mt-[-15px]'>
                    <div class="divider">OR</div>
                    <p className='flex justify-center text-xl font-bold mb-3'>Signin With</p>
                    <button onClick={handleGoogle} className='btn btn-success mb-5 '>Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;