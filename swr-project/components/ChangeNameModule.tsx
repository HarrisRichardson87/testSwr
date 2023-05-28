// Create a react component to change the name
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useSWRConfig } from "swr"
import { useState } from 'react'

import { Data } from '@/pages/api/hello'
const inter = Inter({ subsets: ['latin'] })

export default function ChangeNameModule(data: Data) {
    const [nameToMutate, setNameToMutate] = useState(data.name);
    const { mutate } = useSWRConfig()

    
    // mutate data
    const handleSave = async () => {
        // if name is not okay, return
        if (!isNameOkay()) return
        // mutate data optimistically
        mutate("/name", { name: nameToMutate }, false);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setNameToMutate(e.target.value)
    }

    const isNameOkay = () => {
        return nameToMutate.length > 0 && nameToMutate.length < 20
    }

    return (
        <>
                <div className={styles.edit}>
                    <input type="text" value={nameToMutate} onChange={handleChange} />
                    <button onClick={handleSave}>Save</button>
                </div>
        </>
    )
}