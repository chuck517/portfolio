import styles from '../styles/Navbar.module.css';

interface NavbarProps {
  setContent: Function
}


const Navbar = ({ setContent }: NavbarProps) => {  
  return (
    <div>
      <ul className={styles.navMenu}>
        <li className={styles.navButton} onClick={() => setContent('about')}>About</li>
        <li className={styles.navButton} onClick={() => setContent('works')}>Works</li>
        <li className={styles.navButton} onClick={() => setContent('contact')}>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar;