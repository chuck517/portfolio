import styles from '../styles/Home.module.css';

interface NavbarProps {
  handleClick: Function
}

const Navbar = ({ handleClick }: NavbarProps) => {
  return (
    <div>
      <ul className={styles.navMenu}>
        <li className={styles.navButton} onClick={() => {handleClick('about')}}>About</li>
        <li className={styles.navButton} onClick={() => {handleClick('works')}}>Works</li>
        <li className={styles.navButton} onClick={() => {handleClick('contact')}}>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar;