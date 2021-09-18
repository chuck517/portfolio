import styles from '../styles/Home.module.css';

const TextContainer = ({ content }) => {
  return (
    <div>
      <div className={styles.mainTextContainer}>
        {content}
      </div>
    </div>
  )
}

export default TextContainer;