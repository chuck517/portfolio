import styles from '../styles/Section.module.css';

const Section = ({ section }: any) => {
  const { body } = section;
  return (
    <>
      <div
        className={styles.headerBar}
        style={{zIndex: section.id + 1}}
      >
        <div>{section.title.toUpperCase()}</div>
      </div>
      <div
        id={section.title}
        className={styles.card}
        style={{backgroundImage: `url(${section.background})`}}
      >
        <div className={styles.cardText}>{body}</div>
        <div className={styles.filter} />
      </div>
    </>
  )
}

export default Section;
