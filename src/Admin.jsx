import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Navbar from './components/Navbar';
const Admin = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        var data = { AdminName: fullname, Email: email, Password: password }
        Axios.post(`http://localhost:8080/admin/register`, data).then(res => console.log(res))

        navigate('/')
    }
    return (
        <>
            <Navbar />
            <h1 className='text-center bg-blue-100 text-2xl items-center py-5 '>Sign In as Admin</h1>
            <div className='ml-92'>
                <div className='flex justify-between items-center px-10'>
                    <div className="min-h-screen bg-gray-100 flex items-center justify-center w-[500px]">
                        <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
                            <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
                            <form >
                                <div className="mb-4">
                                    <label className="block text-gray-700">Fullname</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        value={fullname}
                                        onChange={(e) => setFullname(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Password</label>
                                    <input
                                        type="password"
                                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    type="submit"
                                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                                >
                                    Sign Up
                                </button>
                                Already Have Account? <Link to='/admin/login' className='text-blue-700'>Log In</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin
