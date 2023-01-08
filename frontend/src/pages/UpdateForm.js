import axios from "axios"
import {useEffect, useState} from "react";
import Navbar from "../components/navbar";
import Table from "../components/table";
import {Link, useLocation} from "react-router-dom";
import Sellers from "./Seller";

export default function UpdateForm(props) {
    const location = useLocation();
    const { state } = location;
    const requested_route = state.requested_route;
    const rows = state.rows;
    const key = state.key;
    const id = state.id;
    const current_data = state.current_data;
    const [inputs, setInputs] = useState({[key] : id});


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios.put(requested_route,{inputs})
            .then(res => (console.log("success")))
            .catch((err) => {
                console.log(err);
            })
        console.log(inputs)
        alert(inputs);
    }


    return (
        <>
            <Navbar></Navbar>

            <form onSubmit={handleSubmit}>
                {rows.map((row,i) => (
                    <>
                        <label>{row}
                            <input type="text"
                                   name={row}
                                   onChange={handleChange}
                                   placeholder={current_data[row]}
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