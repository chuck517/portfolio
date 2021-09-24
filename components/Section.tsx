import styles from '../styles/Section.module.css';

const Section = ({ section }: any) => {
  const { body } = section;
  let sectionColor;
  switch (section.id) {
    case 0:
      sectionColor = '#8ff80055';
      break;
    case 1:
      sectionColor = '#008ff855';
      break;
    case 2:
      sectionColor = '#f8008f55';
      break;
    default:
      sectionColor = '#ffffff44';
  }
  return (
    <>
      <div
        className={styles.headerBar}
        style={{zIndex: section.id + 2}}
      >
        <div>{section.title.toUpperCase()}</div>
      </div>
      <div
        id={section.title}
        className={styles.card}
        style={{
          backgroundImage: `linear-gradient(${sectionColor}, ${sectionColor}), url(${section.background})`,
        }}
      >
        <div className={styles.cardText}>{body}</div>
        <div className={styles.filter} />
      </div>
    </>
  )
}

export default Section;
