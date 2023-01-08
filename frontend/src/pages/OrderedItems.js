import axios from "axios"
import {useEffect, useState} from "react";
import Navbar from "../components/navbar";
import Table from "../components/table";
import {NavLink, useParams} from "react-router-dom";

export default function OrderedItems(props) {
    const [orderedItems, setOrderedItems] = useState([])
    let { id } = useParams();
    useEffect(() => {
        axios.get("http://localhost:8000/api/orders/items/" + id)
            .then(res => setOrderedItems(res.data.result))
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <NavLink
                to={"/create"}
                state={{
                    requested_route: "http://localhost:8000/api/orders/items/create",
                    rows : ["ItemID","Quantity","OrderID"],
                }}
            >
                <button type="button"
                        className="btn btn-outline-primary btn-sm"
                        style={{marginLeft: 5, marginRight: 5}}
                >Add Item To Order
                </button>
            </NavLink>
            <NavLink
                to={"/create"}
                state={{
                    requested_route: "http://localhost:8000/api/invoices/create",
                    rows : ["e_invoice","TotalPrice"],
                }}
            >
                <button type="button"
                        className="btn btn-outline-primary btn-sm"
                        style={{marginLeft: 5, marginRight: 5}}
                >Create Invoice
                </button>
            </NavLink>
            {(() => {
                if (orderedItems.length > 0) {
                    return (
                        <Table
                            rows={Object.keys(orderedItems[0])}
                            data={orderedItems}
                            redirect_route="/orders/"
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