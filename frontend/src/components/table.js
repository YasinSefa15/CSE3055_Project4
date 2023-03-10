import bootstrap from "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {useState} from "react";
import {Link, NavLink} from "react-router-dom";

export default function Table(props) {

    const [tableData,setTableData] = useState(props.data)
    const delete_action = async (e, props, id, column) => {
console.log(column)
        await axios.delete(props.delete_route, {
           data : {  [column] : id}
        })
            .then((res) => {
                console.log()
                const newList = tableData.filter((item) => {
                    return item[column] !== id
                });
                setTableData(newList);
            })
            .catch((err) => {
                alert(JSON.stringify(err.message))
                console.log(err);
            })
        console.log("delete tıklandı" + props.rows)
    }


    return (
        <div className="container">
            <table className="table table-hover ">
                <thead>
                <tr>
                    {props.rows.map((row, i) => (
                        <th scope="col" key={i + row}>{row}</th>
                    ))}
                </tr>
                </thead>
                <tbody>

                {tableData.map((data, i) => (
                    <tr key={Math.floor(Math.random() * 4000)}>
                        {Object.keys(data).map((key, index) => {
                            if (index === 0){
                                return  (<td >
                                    <Link to={props.redirect_route + data[key]}> {data[key]}</Link>
                                </td>)
                            }else{
                                return  <td >{data[key]}</td>
                            }

                        })}

                        <td key={Math.floor(Math.random() * 4000)}>
                            <NavLink
                                to={"/update"}
                                state={{
                                    requested_route: props.update_route,
                                    rows : props.rows,
                                    key: props.rows[0],
                                    id: data[props.rows[0]],
                                    current_data : data
                                }}
                            >
                                <button type="button"
                                        className="btn btn-outline-primary btn-sm"
                                        style={{marginLeft: 5, marginRight: 5}}
                                >Edit
                                </button>
                            </NavLink>
                            <button type="button"
                                    className="btn btn-outline-danger btn-sm"
                                    style={{marginRight: 10}}
                                    onClick={event => delete_action(event,props,data[props.rows[0]],props.rows[0])}
                            >Delete
                            </button>
                        </td>


                    </tr>
                ))}

                </tbody>
            </table>
        </div>
    )
}