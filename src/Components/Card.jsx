import React, { useEffect, useRef, useState } from 'react';
import { useDispatchCart, useCart } from './ContextReducer';

export default function Card(props) {


    let dispatch = useDispatchCart();
    let data = useCart();
    let priceRef = useRef();
    let options = props.options;
    let priceOptions = Object.keys(options);
    let foodItems = props.foodItems;

    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState("");

    const handleAddCart = async () => {
        await dispatch({
            type: "ADD", id: foodItems._id, name: foodItems.name, price: totalPrice, img: foodItems.img,
            quantity: quantity, size: size
        });
        console.log(data);
    }

    let totalPrice = quantity * parseInt(options[size]);
    useEffect(() => {
        setSize(priceRef.current.value);
    }, []);

    return (
        <div>
            <div>
                <div
                    className="card m-3"
                    style={{ width: "18rem", maxHeight: "360px" }}
                >
                    <img src={foodItems.img} className="card-img-top" alt="..." style={{ height: "150px", objectFit: "fill" }} />
                    <div className="card-body">
                        <h5 className="card-title">{foodItems.name}</h5>
                        <div className="container w-100 mb-3">
                            {/* here we create a drop-down menu of 6 elements using Array.from method */}
                            <select className="m-2 h-100 bg-success rounded" onChange={(e) => setQuantity(e.target.value)}>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>
                                            {" "}
                                            {i + 1}
                                        </option>
                                    );
                                })}
                            </select>
                            <select className="m-2 h-100 bg-success rounded" ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                                {priceOptions.map((d) => {
                                    return (
                                        <option key={d} value={d}>{d}</option>
                                    )
                                })}

                            </select>
                            <div className="d-inline"> ₹{totalPrice}</div>
                        </div>
                        <hr></hr>
                        <button className='btn btn-success justify-center ms-2' onClick={handleAddCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
