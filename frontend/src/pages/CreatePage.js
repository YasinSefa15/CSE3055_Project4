import axios from "axios"
import {useEffect, useState} from "react";
import Navbar from "../components/navbar";
import Table from "../components/table";
import {Link, useLocation} from "react-router-dom";
import Sellers from "./Seller";

export default function CreatePage(props) {
    const [inputs, setInputs] = useState({});
    const requested_route = state.requested_route;
    const rows = state.rows;

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post(requested_route,{inputs})
            .then(res => setInputs(res.data.result))
            .catch((err) => {
                console.log(err);
            })
        console.log(inputs)
        alert(inputs);
    }


    const location = useLocation();
    const { state } = location;


    return (
        <>
            <Navbar></Navbar>
            {state.name}

            <form onSubmit={handleSubmit}>

                <label>row 1:
                    <input type="text"
                           name="id"
                           onChange={handleChange}
                    />
                </label>
                <label>row 1:
                    <input type="text"
                           name="bilgi"
                           onChange={handleChange}
                    />
                </label>
                <input type="submit"/>
            </form>

        </>
    )
}