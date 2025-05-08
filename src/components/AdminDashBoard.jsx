import Axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const AdminDashBoard = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [ProStatus, setProStatus] = useState('');
    const [category, setCategory] = useState('');
    const navigate = useNavigate();
    function handleName(e) {
        setName(e.target.value)
    }

    function handlePrice(e) {
        setPrice(e.target.value)
    }

    function handleQuantity(e) {
        setQuantity(e.target.value)
    }
    function handleDescription(e) {
        setDescription(e.target.value)
    }

    function handleImage(e) {
        setImage(e.target.files[0])
    }
    function handleProStatus(e) {
        setProStatus(e.target.value)
    }

    function handleCategory(e) {
        setCategory(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault();

        try {
            const categoryData = new FormData();
            categoryData.append('CatName', category);

            Axios.post('http://localhost:8080/category/', categoryData, {
                headers: { "Content-Type": "application/json" }
            }).then(res => console.log(res))


            var formData = new FormData();
            formData.append('ProdName', name)
            formData.append('ProOrPrice', price)
            formData.append('ProQty', quantity)
            formData.append('ProDesc', description)
            formData.append('ProStatus', ProStatus)
            formData.append('Images', image)
            Axios.post('http://localhost:8080/product/', formData, {
                headers: { "Content-Type": "multipart/form-data" }
            }).then(res => console.log(res))
            // navigate('/')

        } catch (error) {
            console.log(error);
        }
    }


    function handleLogOut(e) {
        e.preventDefault();
        // const token = 
        localStorage.removeItem('token');
        navigate('/admin/login')
    }
    return (
        <>
        <Navbar/>
        <div className='flex gap-50  px-5'>
            <div className='h-[600px] w-[500px] border-2 border-red-500'>

            </div>
            <div className=' h-[500px] w-[500px]'>
                <form className='flex flex-col' onSubmit={handleSubmit} encType='multipart/form-data'>
                    Product Name<input className='px-2 py-2 border-1 rounded border-gray-400 text-center' type="text" value={name} onChange={handleName} />
                    Product Price<input className='px-2 py-2 border-1 rounded border-gray-400 text-center' type="text" value={price} onChange={handlePrice} />
                    Product Quantity<input className='px-2 py-2 border-1 rounded border-gray-400 text-center' type="text" value={quantity} onChange={handleQuantity} />
                    Product Description<input className='px-30 py-8 border-1 rounded border-gray-400 text-center' type="text" value={description} onChange={handleDescription} />
                    Product Status<input className='px-30 py-8 border-1 rounded border-gray-400 text-center' type="text" value={ProStatus} onChange={handleProStatus} />
                    Product Category<input className='px-30 py-2 border-1 rounded border-gray-400 text-center' type="text" value={category} onChange={handleCategory} />
                    Product Pics<input className='p-2' type="file" onChange={handleImage} />
                    <button className='py-2 px-4 bg-gray-400 text-white text-xl rounded focus:bg-blue-700'>Submit</button>
                </form>
                <br />
                <button onClick={handleLogOut} className='px-5 py-2 rounded text-white font-bold bg-blue-500'>Log Out</button>
            </div>
        </div>
        </>

    )
}

export default AdminDashBoard
