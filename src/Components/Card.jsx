import React from 'react';


export default function Card(props) {

    let options = props.options;
    let priceOptions = Object.keys(options);
    return (
        <div>
            <div>
                <div
                    className="card m-3"
                    style={{ width: "18rem", maxHeight: "360px" }}
                >
                    <img src={props.foodImg} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.foodName}</h5>
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
                                {priceOptions.map((d) => {
                                    return (
                                        <option key={d} value={d}>{d}</option>
                                    )
                                })}

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
