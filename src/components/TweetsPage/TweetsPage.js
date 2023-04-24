import { NavLink } from "react-router-dom"
import TweetCard from "../TweetCard/TweetCard";

export default function TweetsPage() {
    return (
        <div>
            <NavLink to="/">back</NavLink>
            <TweetCard />
        </div>
    )
}