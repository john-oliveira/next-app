import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Sobre from './sobre'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
       <h1>Home</h1>
       <h3>
       <Link href={'/usuarios'}>Usuários</Link>{' | '}
       <Link href={'/postagens'}>Postagens</Link>
       </h3>
       <Sobre/>
    </div>
  )
}

export default Home
