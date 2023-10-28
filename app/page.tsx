import Link from 'next/link'
import styles from './page.module.css'
import { Footer, Hero, Links, Live, Navbar, Papers, Times } from '@/components'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mother}>
        <Navbar />
        <Hero />
        <Times />
        <Papers />
        <Live />
        <Links />
        <Footer />
      </div>
    </main>
  )
}
