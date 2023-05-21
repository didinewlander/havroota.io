"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { Player } from '@lottiefiles/react-lottie-player';

export default function Home() {
  return (
    <main className={styles.main}>
       <div className={styles.center}>
        <h1>
          חברותא.io
        </h1>
       
      </div>
      <div className={styles.card}>
          הדרך הכי נוחה ללמוד למבחן
        </div>
      <Player
        src='https://assets3.lottiefiles.com/packages/lf20_ei2gf306.json'
        className="player"
        loop
        autoplay
      />
     
    </main>
  )
}
