import styles from '../styles/Navbar.module.css';

interface NavbarProps {
  content: String,
  setContent: Function
}


const Navbar = ({ content, setContent }: NavbarProps) => {  
  return (
    <div>
      <ul className={content ? styles.navMenu : styles.navMenuEmpty}>
        <li className={content == 'works' ? styles.navButtonSelected : styles.navButton} onClick={() => setContent('works')}>Works</li>
        <li className={content == 'about' ? styles.navButtonSelected : styles.navButton} onClick={() => setContent('about')}>About</li>
        <li className={content == 'contact' ? styles.navButtonSelected : styles.navButton} onClick={() => setContent('contact')}>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar;