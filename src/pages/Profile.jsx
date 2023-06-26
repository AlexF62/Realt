import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { FcHome } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Profile = () => {
    const auth = getAuth({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
    });
    const [formData, setFormData] = useState({
        name: 'Alex',
        email: 'test1@gmail.com',
    });
    const { name, email } = formData;

    return (
        <>
            <section className='max-w-6xl mx-auto flex justify-center items-center flex-col'>
                <h1 className='text-3xl text-center mt-6 font-bold'>
                    My Profile
                </h1>
                <div className='w-full md:w-[50%] mt-6 px-3'>
                    <form>
                        <input
                            type='text'
                            id='name'
                            value={name}
                            disabled
                            className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out'
                        />
                        <input
                            type='email'
                            id='email'
                            value={email}
                            disabled
                            className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out mt-5'
                        />

                        <div className='flex justify-between whitespace-nowrap mb-6 text-sm sm:text-lg'>
                            <p className='flex items-center '>
                                Do you want to change your name?
                                <span className='text-red-600 hover:text-red-800 transition ease-in-out duration-200 ml-1 cursor-pointer'>
                                    Edit
                                </span>
                            </p>

                            <p className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer'>
                                Sign out
                            </p>
                        </div>
                    </form>
                    <button
                        type='submit'
                        className='w-full bg-blue-600 text-white uppercase text-center px-7 py-3 text-sm font-medium rounded'
                    >
                        <Link to='/create-listing'>
                            <FcHome /> Sell or rent your home
                        </Link>
                    </button>
                </div>
            </section>
        </>
    );
};

export default Profile;
