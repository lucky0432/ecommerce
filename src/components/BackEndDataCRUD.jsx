import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';


const BackEndDataCRUD = () => {
    const [backEndData, setBackEndData] = useState([]);
    const [ProdName, setProdName] = useState('')
    const [ProOrPrice, setProOrPrice] = useState('')
    const [ProDesc, setProDesc] = useState('');
    const [ProStatus, setProStatus] = useState('');
    const [ProQty, setProQty] = useState('');
    const [qty, setQty] = useState(0);
    const navigate = useNavigate()
    const [id, setId] = useState();
    const cart = [];
    useEffect(() => {
        fetch('http://localhost:8080/product')
        .then(res => res.json())
        .then(data => setBackEndData(data.data));
    }, [])

    function handleEdit(e) {
        let id = e.target.value;
        Axios.get('http://localhost:8080/product/' + id).then(d => {
            // console.log(d.data)
            setProdName(d.data.ProdName)
            setProOrPrice(d.data.ProOrPrice)
            setProQty(d.data.ProQty)
            setProDesc(d.data.ProDesc)
            setProStatus(d.data.ProStatus)
            setId(id);
            console.log(id);
        })
    }

    function handleUpdate(e) {
        e.preventDefault();
        var data = { ProdName: ProdName, ProOrPrice: ProOrPrice, ProQty: ProQty, ProDesc: ProDesc, ProStatus: ProStatus };
        Axios.put(`http://localhost:8080/product/${id}`, data).then(d => console.log(d.data));
        navigate('/admin/CRUD');
    }

    function handleDelete(e) {
        const id = e.target.value;
        // alert(id);
        Axios.delete(`http://localhost:8080/product/${id}`).then(d => console.log(d.data));
    }

    function handleIncrement(e) {
         //alert(e.target.id);
        const id = parseInt(e.target.id);
        backEndData.map((d) => {
            if (d.ProId === id) {
                d.ProQty+=1
               // alert(d.ProQty)
            }
        })
        setQty(qty+1)
    }

    function handleDecrement(e) {
        //alert(e.target.id);
       const id = parseInt(e.target.id);
       backEndData.map((d) => {
           if (d.ProId === id) {
               d.ProQty-=1
              // alert(d.ProQty)
           }
       })
       setQty(qty+1)
   }
    
    // function handleIncrement(e) {
    //     // alert(e.target.id);
    //     const id = parseInt(e.target.id);
    //     setQty((prevQty) => ({
    //         ...prevQty,
    //         [id]: (prevQty[id] || 0) + 1
    //     }))
    // }
    return (

        <>
            <Navbar />
            <div className='flex flex-col justify-between items-center'>
                Product name<input className='px-2 py-2 border-1 rounded border-gray-400 text-center' type="text" value={ProdName} onChange={(e) => setProdName(e.target.value)} />
                Product Price<input className='px-2 py-2 border-1 rounded border-gray-400 text-center' type="text" value={ProOrPrice} onChange={(e) => setProOrPrice(e.target.value)} />
                Product Quantity<input className='px-2 py-2 border-1 rounded border-gray-400 text-center' type="text" value={ProQty} onChange={(e) => setProQty(e.target.value)} />
                Product Quantity<input className='px-2 py-2 border-1 rounded border-gray-400 text-center' type="text" value={ProDesc} onChange={(e) => setProDesc(e.target.value)} />
                Product Quantity<input className='px-2 py-2 border-1 rounded border-gray-400 text-center' type="text" value={ProStatus} onChange={(e) => setProStatus(e.target.value)} />
                <button className='my-2 py-2 px-4 bg-gray-400 text-white text-xl rounded focus:bg-blue-700' onClick={handleUpdate} >Update</button>
            </div>
            <div className='my-2 '>
                <div className='flex gap-16 ml-10 '>
                    <p>Name</p>
                    <p>Image</p>
                    <p>Qty</p>
                    <p>Description</p>
                    <p className='ml-40'>Status</p>
                    <p>Edit</p>
                    <p>Delete</p>
                    <p>Increment</p>
                    <p>Order Qty</p>
                    <p>Decrement</p>
                </div>
                {
                    backEndData.map((d, i) => (
                        <div className='border-1 flex justify-center gap-20 items-center px-10 my-4' key={i}>
                            <p className='font-medium text-gray-500'>{d.ProdName}</p>
                            <img src={`http://localhost:8080/${d.Images}`} className='object-fill rounded h-[50px] w-[60px]' />
                            <p className='font-medium text-gray-600 '>{d.ProOrPrice}</p>
                            <p className='font-medium text-gray-600'>{d.ProQty}</p>
                            <p className='font-medium text-gray-600'>{d.ProDesc}</p>
                            <p className='font-medium text-gray-600'>{d.ProStatus}</p>
                            <button className='my-2 py-2 px-4 bg-gray-400 text-white text-xl rounded focus:bg-blue-700' value={d.ProId} onClick={handleEdit}>Edit</button>
                            <button className='my-2 py-2 px-4 bg-gray-400 text-white text-xl rounded focus:bg-blue-700' value={d.ProId} onClick={handleDelete}>Delete</button>
                            <button id={d.ProId} onClick={handleIncrement} className='p-1 bg-gray-400 text-white'>+</button>
                            {/* <p className='qty'>{d.ProQty}</p> */}
                            {/* <p className='qty'>{qty[d.ProId] || 0}</p> */}
                            <button onClick={handleDecrement} id={d.ProId} className='p-1 bg-gray-400 text-white'>-</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default BackEndDataCRUD
