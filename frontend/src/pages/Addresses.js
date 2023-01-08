import axios from "axios"
import {useEffect, useState} from "react";
import Navbar from "../components/navbar";
import Table from "../components/table";
import {Link, NavLink} from "react-router-dom";
import Sellers from "./Seller";

export default function Addresses() {
    const [stationers, setStationers] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/address/read")
            .then(res => setStationers(res.data.result))
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
                    requested_route: "http://localhost:8000/api/address/create",
                    rows : ["City","Address","sName"],
                }}
            >
                <button type="button"
                        className="btn btn-outline-primary btn-sm"
                        style={{marginLeft: 5, marginRight: 5}}
                >Create Address
                </button>

            </NavLink>

            {(() => {
                if (stationers.length > 0) {
                    return (
                        <Table
                            rows={Object.keys(stationers[0])}
                            data={stationers}
                            delete_route="http://localhost:8000/api/address/delete"
                            update_route="http://localhost:8000/api/address/update"
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