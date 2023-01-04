import {Link} from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h1>Oops! Kaybolmuş gözüküyorsunuz.</h1>
            <Link to='/'>
                <button>Ana Sayfaya Dön!</button>
            </Link>
        </div>
    )
}