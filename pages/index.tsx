import type { NextPage } from 'next'
import Nav from '../components/Nav';
import ProfilePic from '../components/ProfilePic';
import Section from '../components/Section'
import { sections } from '../data';

const Home: NextPage = () => {

  return (
    <div>
      <ProfilePic />
      {
        sections.map(section => <Section key={section.id} section={section}/>)
      }
    </div>
  )
}

export default Home
