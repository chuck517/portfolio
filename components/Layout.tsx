import { NextComponentType } from 'next';
import styles from '../styles/Layout.module.css';
import Nav from './Nav';

const Layout: NextComponentType = ({ children }: any) => {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout;
