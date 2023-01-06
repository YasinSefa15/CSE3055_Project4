import axios from "axios"
import {useEffect, useState} from "react";
import Navbar from "../components/navbar";
import Table from "../components/table";

export default function Stationer() {
    const [todos, setTodo] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(res => setTodo(res.data))
            .catch((err) => {
                console.log(err);
            })
    }, [todos])

    return (
        <div>
            <Navbar></Navbar>
            Stationersss
            <Table rows={[{"id": 1, "name": "sefa"},{"id": 2, "name": "isd"}]}></Table>
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