// Create a next layout component for the module

// Path: pages\moduleLayout.tsx
// Compare this snippet from pages\index.tsx:

// import Head from 'next/head'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
// import useSWR from 'swr'
// import { useState } from 'react'
// const inter = Inter({ subsets: ['latin'] })

// export default function Home() {

//   // get bitcoin price
//   const { data, error, mutate, isLoading } = useSWR('query { bitcoin { getBitcoinPrice } }', (query) => fetch('http://localhost:3000/api/hello', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ query })
//   }).then(res => res.json()))

