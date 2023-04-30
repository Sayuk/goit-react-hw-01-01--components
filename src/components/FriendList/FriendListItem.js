import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (
        <li className={styles.item}>
            <span class={isOnline ? styles.statusOn : styles.statusOff}>{isOnline}</span>
            <img src={avatar} alt="User avatar" width="48" class={styles.avatar}/>
            <p class={styles.name}>{name}</p>
     </li>
     
     
        )
}
export default FriendListItem;

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.string.isRequired,
    
}