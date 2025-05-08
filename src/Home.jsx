// import React from 'react'
// import React, { useRef, useState } from 'react';
import React, { useEffect, useRef, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import About from './components/About';
import { FaShoppingCart } from 'react-icons/fa';
import SelectedData from './SelectedData';


const Home = () => {
    const [backEndData, setBackEndData] = useState([]);
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const [qty, setQty] = useState(0);
    const [add, setAdd] = useState(0);

    useEffect(() => {
        fetch('http://localhost:8080/product').then(res => res.json()).then(data => setBackEndData(data.data))
    }, [])
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
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

    // function handleAdd(e) {
    //     let id = (e.target.id);
    // Retrieve the existing cart or start with an empty array
    // cart = JSON.parse(localStorage.getItem('Product')) || [];

    // backEndData.forEach((d, i) => {
    //     if (d.ProId == id) {
    //         let data = {
    //             id: d.ProId,
    //             name: d.ProdName,
    //             qty: d.ProQty,
    //             price: d.ProOrPrice
    //         }
    //         cart.push(data);
    //     }

    // })
    // Now update localStorage with the modified cart
    // localStorage.setItem('Product', JSON.stringify(cart));
    //     setAdd(add + 1);
    // }


    function handleAdd(e) {
        const id = e;
        // console.log(id)

        setCart([...cart, id]);
        setAdd(add + 1)
    }

    function handlePlus(e) {
        const ids = e.target.id
        // alert(ids)
        backEndData.map((d, i) => {
            if (d.ProId == ids) {
                setQty(qty + 1);
            }
        })

    }

    function handleAddProd() {
        navigate('/userdata', {state: {cart}})
    }

    // function handleRemove(e) {
    //     const currId = parseInt(e.target.id);
    //     alert(currId)
    //     let cart = JSON.parse(localStorage.getItem('Product')) || [];
    //     console.log(cart)
    //     cart = cart.filter(d => d.id !== currId)

    //     localStorage.setItem('Product', JSON.stringify(cart));
    // }
    return (
        <>

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
                <div>
                    <FaShoppingCart className='text-green-700 text-2xl' onClick={handleAddProd} />{add}
                </div>
            </div>
            <div className='h-[500px] w-[1300px] ml-5 shadow-xl'>

                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    {
                        backEndData.map((items, index) => (
                            <SwiperSlide key={index}>
                                {/* <p>{items.ProdName}</p> */}
                                {/* <img src={`http://localhost:8080/${items.Images}`} alt="pics" /> */}
                                <img src={`http://localhost:8080/${items.Images}`} alt="pics" />
                            </SwiperSlide>
                        ))
                    }
                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>
            <h1 className='text-5xl my-8 ml-120 items-center'>Our Products Section</h1>
            <div className='flex gap-4 flex-wrap ml-10'>
                {
                    backEndData.map((items, index) => (
                        <div key={index} className='py-4 px-2 w-[400px] shadow-xl'>
                            <div className='flex gap-2'>
                                <h1 className='text-black text-2xl'>Product Name</h1>
                                <h1 className='text-blue-700 text-2xl font-bold'>{items.ProdName}</h1>
                            </div>
                            <div className='h-[200px] gap-8 w-[400px] flex'>
                                <img className='rounded object-fill h-[200px] w-[200px]' src={`http://localhost:8080/${items.Images}`} alt="pics" />
                                <div className=''>
                                    {/* <button onClick={handleAdd} id={items.ProId} className='bg-gray-500  rounded text-white font-base py-2 px-4 my-4'>Add To Cart</button> */}
                                    <button onClick={() => handleAdd(items)} className='bg-gray-500  rounded text-white font-base py-2 px-4 my-4'>Add To Cart</button>
                                    {/* <button onClick={handleRemove} id={items.ProId} className='bg-gray-500  rounded text-white font-base py-2 px-4 my-4'>Remove To Cart</button> */}
                                    <button id={items.ProId} className='bg-gray-500  rounded text-white font-base py-2 px-4 my-4'>Remove To Cart</button>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <h3 className=''>Product Quantity</h3>
                                <h3 className='text-blue-700 font-bold'>{items.ProQty}</h3>
                            </div>
                            <div className='flex gap-4'>
                                <h3 className=''>Product Price</h3>
                                <h3 className='text-blue-700 font-bold'>{items.ProOrPrice}</h3>
                            </div>
                            <div className='flex gap-4'>
                                <h3>Product Description</h3>
                                <h3 className='text-blue-700 font-bold '>{items.ProDesc}</h3>
                            </div>
                            <div className='flex gap-4'>
                                <h3>Product Status</h3>
                                <h3 className='text-blue-700 font-bold'>{items.ProStatus}</h3>
                            </div>

                        </div>
                    ))
                }
            </div>
            <SelectedData carts={

                <div>
                    {
                        cart.map((d, i) => (
                            <div className='flex justify-between px-5 py-2 border-1' key={i}>
                                <h1>{d.ProdName}</h1>
                                <h1>{d.ProOrPrice}</h1>
                                <h1>{d.ProQty}</h1>
                                <div><img src={`http://localhost:8080/${d.Images}`} width={100} height={100} alt="pics" /></div>
                                <button onClick={handlePlus} id={d.ProId}>+</button>
                                <p>{qty}</p>
                                <button>-</button>
                            </div>
                        ))
                    }
                </div>
            }
            />
        </>


    );

}
export default Home
