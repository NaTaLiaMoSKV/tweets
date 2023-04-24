import { NavLink } from "react-router-dom"
export default function HomePage() {
    return (
        <div>
            Home Page
            <NavLink to="/tweets">to tweets</NavLink>
        </div>
    )
}