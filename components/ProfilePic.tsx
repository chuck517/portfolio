import Image from 'next/image';
import styles from '../styles/ProfilePic.module.css';

const ProfilePic = () => {
  return (
    <div className={styles.pictureContainer}>
      <Image className={styles.picture} src="/images/profile.jpg" alt="profile picture" width="300px" height="300px" /> 
    </div>
  )
}

export default ProfilePic;
