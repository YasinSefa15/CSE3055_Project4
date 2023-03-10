import axios from "axios"
import {useEffect, useState} from "react";
import Navbar from "../components/navbar";
import Table from "../components/table";
import {Link, NavLink} from "react-router-dom";
import Sellers from "./Seller";

export default function Stationer() {
    const [stationers, setStationers] = useState([])

    useEffect(() => {
            axios.get("http://localhost:8000/api/stationers")
                .then(res => setStationers(res.data.result))
                .catch((err) => {
                    console.log(err);
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
            <NavLink
                to={"/create"}
                state={{
                    requested_route: "http://localhost:8000/api/stationers/create",
                    rows : ["AddressID"],
                }}
            >
                <button type="button"
                        className="btn btn-outline-primary btn-sm"
                        style={{marginLeft: 5, marginRight: 5}}
                >Add Stationer
                </button>

            </NavLink>

            {(() => {
                if (stationers.length > 0) {
                    return (
                        <Table
                            rows={Object.keys(stationers[0])}
                            data={stationers}
                            delete_route="http://localhost:8000/api/stationers/delete"
                            update_route="http://localhost:8000/api/stationers/update"
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