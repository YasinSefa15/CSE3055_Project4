import axios from "axios"
import {useEffect, useState} from "react";
import Navbar from "../components/navbar";
import Table from "../components/table";
import {Link} from "react-router-dom";
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
            <button type="button"
                    className="btn btn-info text-decoration-none">
                <Link to="/items/create" className="text-decoration-none">Add item</Link>
            </button>

            {(() => {
                if (items.length > 0) {
                    return (
                        <Table
                            rows={Object.keys(items[0])}
                            data={items}
                            delete_route="http://localhost:8000/api/items/delete"
                            update_route="/items/update"
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