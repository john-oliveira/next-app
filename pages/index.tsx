import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Sobre from './sobre'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
       <h1>Home</h1>
       <Sobre/>
    </div>
  )
}

export default Home
