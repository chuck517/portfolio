import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import Nav from '../components/Nav';
import ProfilePic from '../components/ProfilePic';
import Section from '../components/Section'
import { sections } from '../data';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const [ sticky, setSticky ] = useState(false);

  return (
    <div>
      <Head>
        <title>Derek&apos;s Portfolio</title>
        <meta name="description" content="Derek's Web Development Portfolio and Showcase" />
        <meta name="keywords" content="portfolio, web development, web design, programming" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* <ProfilePic /> */}
      {/* <Nav /> */}
      <button className={styles.toggle} onClick={() => setSticky(!sticky)}>{sticky ? 'Sticky' : 'Static'}</button>
      {
        sections.map(section => <Section key={section.id} section={section} sticky={sticky}/>)
      }
    </div>
  )
}

export default Home
