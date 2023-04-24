import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";

import { selectUsersList } from "../../redux/users/selectors";
import { selectFollowList } from "../../redux/actions/selectors";

import { fetchUsers } from "../../redux/users/operations";
import { followUser, unfollowUser } from "../../redux/actions/operations";

import css from './TweetCard.module.css'


export default function TweetCard() {
    const dispatch = useDispatch();
    const usersList = useSelector(selectUsersList);

    const followList = useSelector(selectFollowList);

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

    const onButtonClick = (user) => {

        if (isUserFollowing(user)) {
            dispatch(unfollowUser(user));
        } else {
            dispatch(followUser(user));
        }
    }

    const isUserFollowing = user => {
        const res = followList.find(item => item.id === user.id);
        return res;
    }

    return (
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

                            <div className={css.tweet__data}>
                                <p className={css.tweet__text}>{user.tweets} tweets</p>
                                <p className={css.tweet__text}> { formatNumber(user.followers) } followers</p>
                                <button className={isUserFollowing(user) ? css.tweet__activeButton : css.tweet__button} onClick={() => onButtonClick(user)}>{ isUserFollowing(user) ? 'Following' : 'Follow'}</button>
                            </div>
                            
                        </li>
                    )
                )}
            </ul>
    )
}