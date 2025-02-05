

import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';



const Register = () => {
    const { handleRegister, manageProfile } = useContext(authContext)
    const [error, setError] = useState()
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = e.target.name.value
        const image = e.target.image.value
        const email = e.target.email.value
        const password = e.target.password.value
        const conPassword = e.target.conPassword.value
        console.log(name, email, password, conPassword)
        if (password.length < 6) {
            setError('Password must contain atleast 6 characters')
            return
        }
        if (password != conPassword) {
            setError('Passowrd does not match')
            return
        }
        if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) {
            setError('Password must contain at least one lowercase and one uppercase letter');
            return;
        }

        handleRegister(email, password)
          .then(res => {
            manageProfile(name, image)
            navigate('/')

          })
        form.reset()


    }
    return (
        <div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-10">
                <div className='text-center mt-5'>
                    <h2 class="text-xl font-semibold">Register</h2>
                    <div class="mt-2 w-36 border-t-2 border-green-500 mx-auto"></div>
                </div>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name='name' type="text" placeholder="Enter your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input name='image' type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="email" className="input input-bordered" required />
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
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input name='conPassword' type={showPassword ? 'text' : 'password'} placeholder="email" className="input input-bordered" required />
                        <button onClick={() => setShowPassword(!showPassword)} className='absolute right-6 top-12'>
                            {
                                showPassword ? <FaEye /> : <FaEyeSlash />
                            }
                        </button>
                    </div>
                    {
                        error && <p className='text-red-500'>{error}</p>
                    }
                    <div className="form-control mt-6">



                        <button className="btn bg-[#b8dae6] font-bold text-xl ">Register</button>
                    </div>
                    <p className='px-5'>Already have an account! Please <span className='text-green-400 link link-hover'><Link to='/login'>Login</Link></span></p>

                </form>

            </div>
        </div>
    );
};

export default Register;