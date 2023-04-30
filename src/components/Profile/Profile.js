import PropTypes from 'prop-types';
import styles from './Profile.module.css';

 const Profile = ({props}) => {
    const infoProfile = [
        {
  "username": "Jacques Gluke",
  "tag": "jgluke",
  "location": "Ocho Rios, Jamaica",
  "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  "stats": {
    "followers": 5603,
    "views": 4827,
    "likes": 1308
  }
}

    ]
    return <section>
            {infoProfile.map(({avatar, username, tag, location, followers, views, likes}) => {
                return <div class={styles.profile}>
                        <div class={styles.description}>
                            <img src={avatar} alt="User avatar" width="100" class={styles.avatar} />
                            <p class={styles.name}>{username}</p>
                            <p class={styles.tag}>{tag}</p>
                            <p class={styles.location}>{location}</p>
                    
                        <ul class={styles.stats}>
                            <li>
                                <span class={styles.label}>followers</span>
                                <span class={styles.quantity}>{followers}</span>
                            </li>
                            <li>
                                <span class={styles.label}>views</span>
                                <span class={styles.quantity}>{views}</span>
                            </li>
                            <li>
                                <span class={styles.label}>likes</span>
                                <span class={styles.quantity}>{likes}</span>
                            </li>
                        </ul>
                </div>
           
                </div>
                 })
            }
    </section>
}
export default Profile;




Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}