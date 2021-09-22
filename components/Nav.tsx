import { NextComponentType } from "next";
import styles from '../styles/Nav.module.css';
import ProfilePic from "./ProfilePic";

const Nav: NextComponentType = () => {
  return (
    <>
      <ProfilePic />
      <div className={styles.navbar}>
        <ul className={styles.menu}>
          <li><a href="#about">About</a></li>
          <li><a href="#works">Works</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </>
  )
}

export default Nav;
