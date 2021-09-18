import styles from '../styles/Home.module.css';

interface NavbarProps {
  setContent: Function
}


const Navbar = ({ setContent }: NavbarProps) => {
  
  // const handleClick: Function = (option: String) => {
  //   let newContent = '';
  //   switch(option) {
  //     case 'about':
  //       newContent = 'Hi. This is my portfolio. I hope you like it. We can be friends. :)';
  //       break;
  //     case 'works':
  //       newContent = 'I\'ve made things out of things before. :)';
  //       break;
  //     case 'contact':
  //       newContent = 'Here is my email. It is gregorny@mylanta.gov. :)';
  //       break;
  //     default:
  //       break;
  //   }
  //   setContent(newContent)
  // }
  
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