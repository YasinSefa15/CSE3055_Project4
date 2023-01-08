import axios from "axios"
import {useEffect, useState} from "react";
import Navbar from "../components/navbar";
import Table from "../components/table";
import {Link, useLocation} from "react-router-dom";
import Sellers from "./Seller";

export default function CreatePage(props) {
    const [inputs, setInputs] = useState({});
    const {state} = useLocation()
    const requested_route = state.requested_route;
    const rows = state.rows;

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post(requested_route, {inputs})
            .then(res => {
                console.log("--")
                console.log(res.data)
                alert(JSON.stringify(res.data, null, 4))
            })
            .catch((err) => {
                alert(err.message)
                console.log(err);
            })

    }

    return (
        <>
            <Navbar></Navbar>

            <form onSubmit={handleSubmit}>

                {rows.map((row, i) => (
                    <>
                        <label>{row}
                            <input type="text"
                                   name={row}
                                   onChange={handleChange}
                                   key={i}
                            />

                        </label>
                        <br></br>
                    </>


                ))}
                <input type="submit"/>
            </form>

        </>
    )
}