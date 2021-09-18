import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import Navbar from '../components/navbar';
import TextContainer from '../components/textContainer';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  let [ content, setContent ] = useState('');

  return (
    <div className={styles.siteContainer}>
      <main className={styles.mainContainer}>
        <div className={styles.profileContainer}>
          <Image className={styles.profilePic} src="/images/profile.jpg" alt="profile" width="300px" height="300px" />
        </div>
        <div className={styles.infoContainer}>
          <Navbar content={content} setContent={setContent} />
          <TextContainer content={content}/>
        </div>
      </main>
    </div>
  )
}

export default Home
