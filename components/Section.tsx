<<<<<<< HEAD
import { NextComponentType } from "next";
import styles from '../styles/Section.module.css';

type SectionType = {
  id: number,
  title: string,
  body: string,
  background: string,
}

interface SectionPropsType {
  section: SectionType,
}

const Section = ({ section }: SectionPropsType) => {
=======
import styles from '../styles/Section.module.css';

const Section = ({ section }: any) => {
>>>>>>> development-ver2
  const { body } = section;
  return (
    <>
      <div className={styles.headerBar} style={{zIndex: section.id + 1}}>{section.title.toUpperCase()}</div>
      <div id={section.title} className={styles.card} style={{backgroundImage: `radial-gradient(#000000bb, #000000bb, #000000bb, #000000bb, #55555588), url(${section.background})`}}>
        <div className={styles.cardText}>{body}</div>
      </div>
    </>
  )
}

export default Section;
