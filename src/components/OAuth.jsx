import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { getAuth } from 'firebase/auth';
import { db } from '../firebase';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const OAuth = () => {
    const navigate = useNavigate();
    async function onGoogleClick() {
        try {
            const auth = getAuth();
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            const docRef = doc(db, 'users', user.uid);
            const docSnap = await getDoc(docRef);

            if (!docSnap.exists()) {
                await setDoc(docRef, {
                    name: user.displayName,
                    email: user.email,
                    timestamp: serverTimestamp(),
                });
            }

            navigate('/');
        } catch (error) {
            toast.error('Could not authorize with Goggle');
        }
    }
    return (
        <button
            type='button'
            onClick={onGoogleClick}
            className='flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium'
        >
            <FcGoogle size={25} />
            Continue with Google
        </button>
    );
};

export default OAuth;
