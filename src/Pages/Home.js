import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div
          className="card m-3"
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Item Name</h5>
            <p className="card-text">Description of IteM</p>
            <div className="container w-100 mb-3">
              <select className="m-2 h-100 w-100 bg-success"></select>
            </div>
            <Link href="#" className="btn btn-primary">
              Go somewhere
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
