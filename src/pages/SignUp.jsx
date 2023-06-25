import React, { useState } from 'react';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { GiAlienSkull } from 'react-icons/gi';
import OAuth from '../components/OAuth';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const { name, email, password } = formData;

    function onChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    }

    return (
        <section>
            <h1 className='text-3xl text-center mt-6 font-bold'>Sign Up</h1>
            <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
                <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
                    <img
                        src='https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80'
                        alt='key'
                        className='w-full rounded-2xl'
                    />
                </div>
                <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
                    <form>
                        <input
                            className='w-full px-4 py-2 text-xl mb-6 text-gray-700 bg-white border-gray-300 rounded transition ease-in-out'
                            type='text'
                            placeholder='Full name'
                            id='name'
                            value={name}
                            onChange={onChange}
                        />
                        <input
                            className='w-full px-4 py-2 text-xl mb-6 text-gray-700 bg-white border-gray-300 rounded transition ease-in-out'
                            type='email'
                            placeholder='Enter your email'
                            id='email'
                            value={email}
                            onChange={onChange}
                        />
                        <div className='relative mb-6'>
                            <input
                                className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out'
                                type={showPassword ? 'text' : 'password'}
                                placeholder='Enter your password'
                                id='password'
                                value={password}
                                onChange={onChange}
                            />
                            {showPassword ? (
                                <AiFillEye
                                    className='absolute right-3 top-3 text-xl cursor-pointer '
                                    onClick={() =>
                                        setShowPassword(
                                            (prevState) => !prevState
                                        )
                                    }
                                />
                            ) : (
                                <AiFillEyeInvisible
                                    className='absolute right-3 top-3 text-xl cursor-pointer'
                                    onClick={() =>
                                        setShowPassword(
                                            (prevState) => !prevState
                                        )
                                    }
                                />
                            )}
                        </div>
                        <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg '>
                            <p className='mb-6 '>
                                Have a account?
                                <Link
                                    className='text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1'
                                    to='/sign-in'
                                >
                                    Sign in
                                </Link>
                            </p>
                            <p>
                                <Link
                                    className='text-blue-800 hover:text-red-700 transition duration-200 ease-in-out ml-1'
                                    to='/forgot-password'
                                >
                                    Forgot password?{' '}
                                    <GiAlienSkull size={30} color='red' />
                                </Link>
                            </p>
                        </div>
                    </form>
                    <button
                        className='w-full
                         bg-blue-600
                          text-white
                           px-7 py-3 
                           text-sm font-medium 
                           uppercase rounded shadow-md hover:bg-blue-700 
                           transition duration-150 ease-in-out hover:shadow-lg
                            active:bg-blue-800'
                        type='submit'
                    >
                        Sign up
                    </button>
                    <div
                        className='my-4 before:border-t flex before:flex-1 items-center before:border-gray-300
                    after:border-t  after:flex-1  after:border-gray-300'
                    >
                        <p className='text-center font-semibold mx-4 '>OR</p>
                    </div>
                    <OAuth />
                </div>
            </div>
        </section>
    );
};

export default SignUp;