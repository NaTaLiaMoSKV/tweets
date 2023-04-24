import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import { selectUsersList } from "../../redux/users/selectors";
import { useEffect } from "react";
import { fetchUsers } from "../../redux/users/operations";
import css from './TweetsPage.module.css'

export default function TweetsPage() {
    const dispatch = useDispatch();
    const usersList = useSelector(selectUsersList);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch])
    
    const formatNumber = number => {
        if (number > 1000) {
            const numStr = number.toString();
            const lastThreeDigits = numStr.substring(numStr.length - 3);
            const firstDigits = numStr.substring(0, numStr.length - 3);
            return `${firstDigits},${lastThreeDigits}`;
        } else {
            return number;
        }
    }

    return (
        <div>
            <NavLink to="/">back</NavLink>

            <ul className={css.tweets}>
                {usersList.map(
                    user => (
                        <li key={user.id} className={css.tweet}>
                            <img className={css.tweet__logo} alt='GoIT' src={require(`../../images/goit-logo.png`)}></img>
                            <img className={css.tweet__contentImage} alt='tweet message' src={require(`../../images/tweet-image.png`)}></img>
                            <div className={css.rect}></div>
                            <div className={css.eclipse}>
                                <div className={css.eclipseBg}>
                                    <img className={css.tweet__image} src={require(`../../images/${user.avatar}`)} alt={user.name}></img>
                                </div>
                            </div>
                            
                            {/* <img className={css.tweet__rectImage} src={require(`../../images/rectangle.png`)}></img> */}
                            {/* <img className={css.tweet__eclipseImage} src={require(`../../images/eclipse.png`)}></img> */}
                            <div className={css.tweet__data}>
                                <p className={css.tweet__text}>{user.tweets} tweets</p>
                                <p className={css.tweet__text}> {formatNumber(user.followers)} followers</p>
                                <button className={css.tweet__button}>Follow</button>
                            </div>
                            

                        </li>
                    )
                )}
            </ul>
        </div>
    )
}