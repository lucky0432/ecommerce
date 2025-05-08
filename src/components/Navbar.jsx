import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    const navObj = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contact" },
        { name: "Sign In", path: "/user/sign" },
    ]
    function handleSignLogin(e) {
        navigate('/admin/sign')
    }
    return (
        <div>
            <div className='flex justify-between items-center py-4  px-2'>
                <div>
                    <h1 className='font-bold text-blue-500 text-3xl'>E-COMMERCE</h1>
                </div>

                <div className='flex list-none gap-5 bg-blue-100 font-medium px-20 py-4'>
                    {navObj.map((obj, index) => (
                        <li className='hover:text-blue-400 pl-2 text-xl uppercase text-gray-500 transition-all duration-500 ease-in-out' key={index}>
                            <Link to={obj.path}>{obj.name}</Link>
                        </li>
                    ))}
                </div>

                <button className='bg-blue-500 px-5 py-1 text-xl font-bold btn rounded-xl text-white' onClick={handleSignLogin}>Admin</button>
            </div>
        </div>
    )
}

export default Navbar
