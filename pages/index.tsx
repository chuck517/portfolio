import type { NextPage } from 'next'
import Nav from '../components/Nav';
import ProfilePic from '../components/ProfilePic';
import Section from '../components/Section'
import { sections } from '../data';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {

  return (
    <div>
      <ProfilePic />
      <Nav />
      {
        sections.map(section => <Section key={section.id} section={section}/>)
      }
    </div>
  )
}

export default Home
