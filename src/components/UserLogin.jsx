import Axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const UserLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        var data = { Email: email, Password: password }
        Axios.post(`http://localhost:8080/user/login`, data).then(res => {

            console.log(res)
            if (res.data.token) {
                localStorage.setItem("token", JSON.stringify(res.data.token)); // Store token
                alert("Login Successful!");
                navigate('/user/cart')
            } else {
                alert("Invalid Credentials!");
            }
        })
    }
    // function handleLogOut(e) {
    //     e.preventDefault();
    //     // const token = 
    //     localStorage.removeItem('token');
    //     navigate('/admin/login')
    // }
    return (
        <div>
        <Navbar/>
            <h1 className='text-center bg-blue-100 text-2xl items-center py-5 '>Log In as User</h1>
            <div className="min-h-screen bg-gray-100 flex  items-center  justify-center">
                <div className="bg-white p-6 rounded shadow-md w-[500px]">
                    <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
                    <form >
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
                            Log In
                        </button>
                        {/* <button onClick={handleLogOut}
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">Log Out</button> */}
                        Create an Acoount here! <Link to="/user/sign">Sign In</Link>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default UserLogin
