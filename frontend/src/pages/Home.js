import bootstrap from "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from "../components/table";
import Navbar from "../components/navbar";

export default function Home() {
    return (
        <>
            <Navbar></Navbar>
            <Table></Table>
        </>
    )
}