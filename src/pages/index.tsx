// next components
import Image from 'next/image'

// styles
import styles from 'styles/Home.module.scss'

// types
import { NextPage } from 'next/types'

const Home: NextPage = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src='/next.svg'
            alt='Next.js Logo'
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src='/thirteen.svg'
              alt='13'
              width={40}
              height={31}
              priority
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
