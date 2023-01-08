import axios from "axios"
import {useEffect, useState} from "react";
import Navbar from "../components/navbar";
import Table from "../components/table";
import {Link} from "react-router-dom";

export default function Sellers() {
    const [seller, setOrders] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/sellers")
            .then(res => {
                setOrders(res.data.result)
                console.log(res.data.result)
            })
            .catch((err) => {
                console.log("error occured on request");
                console.log(err.message)
            })
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <button type="button"
                    className="btn btn-info text-decoration-none">
                <Link to="/stationers/sellers" className="text-decoration-none">Seller</Link>
            </button>
            <button type="button"
                    className="btn btn-info text-decoration-none">
                <Link to="/stationers/buyers" className="text-decoration-none">Buyer</Link>
            </button>


            {(() => {
                if (seller.length > 0) {
                    return (
                        <Table
                            rows={Object.keys(seller[0])}
                            data={seller}
                            delete_route="http://localhost:8000/api/sellers/delete"
                        ></Table>
                    )
                } else {
                    return (
                        <div className="alert alert-info" role="alert">
                            No Record Found!
                        </div>
                    )
                }
            })()}


        </div>
    )
}