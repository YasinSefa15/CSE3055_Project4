import bootstrap from "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from "react-router-dom";

export default function Navbar() {
    const textColor = "#ececec";
    const backgroundColor = "#9fd3c7";
    const activeColor = "#385170";
    const notActiveColor = "#ececec";
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary" >
                <div className="container-fluid" style={{backgroundColor : backgroundColor}}>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <NavLink
                            to="/stationers"
                            className="nav-item text-decoration-none "
                            style={({isActive}) => ({
                                //backgroundColor: isActive ? activeColor : notActiveColor,
                                color : isActive ? activeColor : notActiveColor,
                            })}
                        >
                                Stationers
                        </NavLink>

                        <div style={{width: 10}}></div>

                        <NavLink
                            to="/orders"
                            className="nav-item text-decoration-none "
                            style={({isActive}) => ({
                                //backgroundColor: isActive ? activeColor : notActiveColor,
                                color : isActive ? activeColor : notActiveColor,
                            })}
                        >
                            Orders
                        </NavLink>

                        <div style={{width: 10}}></div>

                        <NavLink
                            to="/items"
                            className="nav-item text-decoration-none "
                            style={({isActive}) => ({
                                //backgroundColor: isActive ? activeColor : notActiveColor,
                                color : isActive ? activeColor : notActiveColor,
                            })}
                        >
                            Items
                        </NavLink>

                        <div style={{width: 10}}></div>

                        <NavLink
                            to="/invoices"
                            className="nav-item text-decoration-none "
                            style={({isActive}) => ({
                                //backgroundColor: isActive ? activeColor : notActiveColor,
                                color : isActive ? activeColor : notActiveColor,
                            })}
                        >
                            Invioces
                        </NavLink>

                        <div style={{width: 10}}></div>

                        <NavLink
                            to="/addresses"
                            className="nav-item text-decoration-none "
                            style={({isActive}) => ({
                                //backgroundColor: isActive ? activeColor : notActiveColor,
                                color : isActive ? activeColor : notActiveColor,
                            })}
                        >
                            Addresses
                        </NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
}