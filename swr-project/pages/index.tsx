import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import useSWR from 'swr'
import { useState } from 'react'
import ChangeNameModule from '@/components/ChangeNameModule'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [showEdit, setShowEdit] = useState(false);
  // get first name do not revalidate 
  const { data, error, mutate, isLoading } = useSWR("/name", (query:any) => fetch('http://localhost:3000/api/hello', {
    
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  }).then(res => res.json()), { revalidateOnFocus: false, revalidateOnReconnect: false })

  
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>
  
  // Set name to mutate in state
  console.log(data)

  const handleShowEdit = () => {
    setShowEdit(!showEdit)
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js! Test fork</a>
        </h1>
        { data.name}
          <button onClick={() => mutate()}>Reset Name</button>
        <button onClick={handleShowEdit}>Edit Name</button>

        { showEdit && <div className={styles.edit}>
            <ChangeNameModule name={data.name} />
          </div>
        }
      </main>
    </>
  )
}



