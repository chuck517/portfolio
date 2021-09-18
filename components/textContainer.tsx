import styles from '../styles/TextContainer.module.css';

interface TextContainerProps {
  content: String
}

const TextContainer = ({ content }: TextContainerProps) => {

  let textToDisplay: String = '';
  
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