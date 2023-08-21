import React from 'react'
import './global.css'
import Header from '../ui/Header'
import Providers from '../ui/Providers'
import Tabs from '../ui/Tabs'

export const metadata = {
    title: 'MovieApp',
}

function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body>
                <Providers>
                    <Header />
                    <Tabs/>
                    {children}
                </Providers>
            </body>
        </html>
    )
}

export default RootLayout