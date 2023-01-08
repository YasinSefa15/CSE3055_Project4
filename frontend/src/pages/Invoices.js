import axios from "axios"
import {useEffect, useState} from "react";
import Navbar from "../components/navbar";
import Table from "../components/table";
import {NavLink} from "react-router-dom";

export default function Invoices() {
    const [invoices, setInvoices] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/invoices/read")
            .then(res => setInvoices(res.data.result))
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
                if (invoices.length > 0) {
                    return (
                        <Table
                            rows={Object.keys(invoices[0])}
                            data={invoices}
                            delete_route="http://localhost:8000/api/invoices/delete"
                            update_route="http://localhost:8000/api/invoices/update"
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