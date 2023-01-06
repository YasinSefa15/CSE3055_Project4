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
            {orders.length > 0 && <Table
                rows={Object.keys(orders[0])}
                data={orders}
            ></Table>}

            {orders.length < 0 && <div> no data</div>}

        </div>
    )
}