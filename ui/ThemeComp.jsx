"use client"

import { useTheme } from 'next-themes'
import React, { useState, useEffect } from 'react'
import { CiDark, CiLight } from 'react-icons/ci'

function ThemeComp() {
    const [mounted, setMounted] = useState(false)
    const { systemTheme, theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    const themeMode = theme === "system" ? systemTheme : theme

    return (
        <div>
            {
                mounted && (
                    themeMode === "dark" ?
                        <CiDark onClick={() => setTheme('light')} className='cursor-pointer' size={25}></CiDark> :
                        <CiLight onClick={() => setTheme('dark')} className='cursor-pointer' size={25}></CiLight>
                )
            }
        </div>
    )
}

export default ThemeComp