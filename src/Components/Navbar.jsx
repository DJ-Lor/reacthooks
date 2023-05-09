import { NavLink } from "react-router-dom";

export default function Navbar() {

    let activeNavStyle = {
        color: "green",
        fontWeight: "bold"
    }

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" style={({isActive}) => isActive ? activeNavStyle : null}>
                    Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/inspections" style={({isActive}) => isActive ? activeNavStyle : null}>
                    Inspections
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/articles/:id" style={({isActive}) => isActive ? activeNavStyle : null}>
                    Articles
                    </NavLink>
                </li>
    
            </ul>
        </nav>
    );

}