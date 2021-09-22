import { NextComponentType } from "next";
import styles from '../styles/Nav.module.css';

const Nav: NextComponentType = () => {
  return (
    <>
      <div className={styles.navButton}>
        <p className={styles.navIcon}>Menu</p>
        <ul className={styles.navMenu}>
          <li className={styles.navOption}>
          <a href="#about">  About</a>
          </li>
          <li className={styles.navOption}>
          <a href="#works">  Works</a>
          </li>
          <li className={styles.navOption}>
          <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Nav;
