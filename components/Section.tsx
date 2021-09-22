import { NextComponentType } from "next";
import Image from 'next/image';
import styles from '../styles/Section.module.css';

const Section: NextComponentType = ({ section }: any) => {
  const { body } = section;
  return (
    <>
      <div className={styles.headerBar} style={{zIndex: section.id + 1}}>{section.title.toUpperCase()}</div>
      <div id={section.title} className={styles.card} style={{backgroundImage: `radial-gradient(#000000bb, #000000bb, #000000bb, #000000bb, #55555588), url(${section.background})`}}>
        {body}
      </div>
    </>
  )
}

export default Section;
