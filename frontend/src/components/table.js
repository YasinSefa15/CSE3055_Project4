import bootstrap from "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Table(props) {
    return (
        <div className="container">
            <table className="table table-hover ">
                <thead>
                <tr>
                    {props.rows.map((row, i) => (
                        <th scope="col" key={i}>{row}</th>
                    ))}
                </tr>
                </thead>
                <tbody>

                {props.data.map((data, i) => (
                    <tr key={i}>
                        {Object.keys(data).map((key, index) => (
                            <td>{data[key]}</td>
                        ))}

                        <td>
                            <button type="button"
                                    className="btn btn-outline-primary btn-sm"
                                    style={{marginLeft: 5, marginRight: 5}}>Edit
                            </button>

                            <button type="button"
                                    className="btn btn-outline-danger btn-sm"
                                    style={{marginRight: 10}}>Delete
                            </button>
                        </td>


                    </tr>
                ))}

                </tbody>
            </table>
        </div>
    )
}