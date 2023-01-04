import axios from "axios"
import {useEffect, useState} from "react";

export default function Example() {
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
            Example Page To Show Use Of Axios
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