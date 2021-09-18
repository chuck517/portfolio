import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import Navbar from '../components/navbar';
import TextContainer from '../components/textContainer';
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  let [ content, setContent ] = useState('');
  
  const handleClick: Function = (option: String) => {
    switch(option) {
      case 'about':
        setContent('Hi. This is my portfolio. I hope you like it. We can be friends. :)');
        break;
      case 'works':
        setContent('I\'ve made things out of things before. :)');
        break;
      case 'contact':
        setContent('Here is my email. It is gregorny@mylanta.gov. :)');
        break;
      default:
        break;
    }
  }

  return (
    <div className={styles.siteContainer}>
      <main className={styles.mainContainer}>
        <div className={styles.profileContainer}>
          <Image className={styles.profilePic} src="/images/profile.jpg" alt="profile" width="300px" height="300px" />
        </div>
        <div className={styles.infoContainer}>
          <Navbar handleClick={handleClick} />
          <TextContainer content={content}/>
        </div>
      </main>
    </div>
  )
}

export default Home
