import axios from "axios"
import {useEffect, useState} from "react";
import Navbar from "../components/navbar";
import Table from "../components/table";

export default function Stationer() {
    const [todos, setTodo] = useState([])
    const [stationers, setStationers] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(res => setTodo(res.data))
            .catch((err) => {
                console.log(err);
            })
    }, [])

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
            Stationersss
            <Table
                rows={["id","x"]}
                data={stationers}
            ></Table>

            {console.log(stationers[0])}
            <div>
                {todos.map((todo, i) => (
                    <div className='card' key={i}>
                        <h3>{todo.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}