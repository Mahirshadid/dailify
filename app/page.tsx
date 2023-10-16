import Image from 'next/image'
import styles from './page.module.css'
import { Footer, Hero, Navbar, Papers, Times } from '@/components'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mother}>
        <Navbar />
        <Hero />
        <Times />
        <Papers />
        <Footer />      
      </div>
    </main>
  )
}
