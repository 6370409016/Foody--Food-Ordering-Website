import React from 'react';


export default function Card() {
    return (
        <div>
            <div>
                <div
                    className="card m-3"
                    style={{ width: "18rem", maxHeight: "360px" }}
                >
                    <img src="https://source.unsplash.com/random/900x700/?lunch" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Item Name</h5>
                        <p className="card-text">Description of IteM</p>
                        <div className="container w-100 mb-3">
                            {/* here we create a drop-down menu of 6 elements using Array.from method */}
                            <select className="m-2 h-100 bg-success rounded">
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>
                                            {" "}
                                            {i + 1}
                                        </option>
                                    );
                                })}
                            </select>
                            <select className="m-2 h-100 bg-success rounded">
                                <option value="half">Half</option>
                                <option value="full">Full</option>
                            </select>
                            <div className="d-inline">Total Price</div>
                        </div>
                        {/* <Link href="#" className="btn btn-primary">
                            Go somewhere
                        </Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
