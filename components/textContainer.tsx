import styles from '../styles/Home.module.css';

// type Content = 'about' | 'works' | 'contact';

interface TextContainerProps {
  content: String
}

const TextContainer = ({ content }: TextContainerProps) => {

  let textToDisplay = '';
  
  switch (content) {
    case 'about':
      textToDisplay = 'Hi. This is my portfolio. I hope you like it. We can be friends. :)'
      break;
    case 'works':
      textToDisplay = 'Hi. I have made things out of things before. :)'
      break;
    case 'contact':
      textToDisplay = 'Hi. This is my email address. It is gregorny@mylanta.gov. :)'
      break;
    default:
      break;
  }

  return (
    <div>
      <div className={styles.mainTextContainer}>
        {textToDisplay}
      </div>
    </div>
  )
}

export default TextContainer;