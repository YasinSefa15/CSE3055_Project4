import bootstrap from "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Table(props) {
    return (
        <div className="container">
            <table className="table table-hover ">
                <thead>
                <tr>
                    {props.rows}

                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry the Bird</td>
                    <td>@fat</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}