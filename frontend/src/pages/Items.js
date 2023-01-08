import axios from "axios"
import {useEffect, useState} from "react";
import Navbar from "../components/navbar";
import Table from "../components/table";
import {Link, NavLink} from "react-router-dom";
import Sellers from "./Seller";

export default function Items() {
    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/items")
            .then(res => setItems(res.data.result))
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
                    requested_route: "http://localhost:8000/api/items/create",
                    rows : ["name","phone"],
                }}
            >
                <button type="button"
                        className="btn btn-outline-primary btn-sm"
                        style={{marginLeft: 5, marginRight: 5}}
                >Add Item
                </button>
            </NavLink>

            {(() => {
                if (items.length > 0) {
                    return (
                        <Table
                            rows={Object.keys(items[0])}
                            data={items}
                            delete_route="http://localhost:8000/api/items/delete"
                            update_route="http://localhost:8000/api/items/update"
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