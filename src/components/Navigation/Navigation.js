import { NavLink } from "react-router-dom";


export default function Navigation() {
    return (
        <>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/tweets'>Tweets</NavLink>
            </nav>
        </>
    )
}