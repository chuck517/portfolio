import styles from '../styles/Home.module.css';

// type Content = 'about' | 'works' | 'contact';

interface TextContainerProps {
  content: String
}

const TextContainer = ({ content }: TextContainerProps) => {
  return (
    <div>
      <div className={styles.mainTextContainer}>
        {content}
      </div>
    </div>
  )
}

export default TextContainer;