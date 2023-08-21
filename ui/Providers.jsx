"use client"
import { ThemeProvider } from 'next-themes'
import React from 'react'

function Providers({ children }) {
    return (
        <ThemeProvider enableSystem={false} attribute="class">
            {children}
        </ThemeProvider>
    )
}

export default Providers