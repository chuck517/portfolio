import type { NextPage } from 'next';
import Head from 'next/head';
import Nav from '../components/Nav';
import ProfilePic from '../components/ProfilePic';
import Section from '../components/Section'
import { sections } from '../data';

const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Derek&apos;s Portfolio</title>
        <meta name="description" content="Derek's Web Development Portfolio and Showcase" />
        <meta name="keywords" content="portfolio, web development, web design, programming" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ProfilePic />
      {/* <Nav /> */}
      {
        sections.map(section => <Section key={section.id} section={section}/>)
      }
    </div>
  )
}

export default Home
