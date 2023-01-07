import axios from "axios"
import {useEffect, useState} from "react";
import Navbar from "../components/navbar";
import Table from "../components/table";

export default function Orders() {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/orders")
            .then(res => setOrders(res.data.result))
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            sipariş butonu
            {(() => {
                if (orders.length > 0) {
                    return (
                        <Table
                            rows={Object.keys(orders[0])}
                            data={orders}
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