"use client"
import Link from 'next/link';
import React from 'react'
import { useSearchParams } from 'next/navigation'

function Tabs() {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre');

    console.log(genre)

    const tabs = [
        {
            name: 'En Popüler',
            url: 'popular'
        },
        {
            name: 'En Son',
            url: 'now_playing'
        },
        {
            name: 'Yakında Gelecekler',
            url: 'upcoming'
        }
    ];
    return (
        <div className='p-5 m-5 bg-gray-100 dark:bg-gray-900 flex items-center justify-center gap-7'>
            {
                tabs.map((tab, i) => (
                    <Link className={`cursor-pointer hover:opacity-75 transition-opacity ${tab.url === genre ? "underline underline-offset-8 text-amber-600" : ""}`} key={i} href={`/?genre=${tab.url}`}>{tab.name}</Link>
                    ))
            }
        </div>
    )
}

export default Tabs