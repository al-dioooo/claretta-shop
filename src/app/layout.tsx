import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export const metadata: Metadata = {
    title: "Claretta Shop",
    description: 'Created with Love by Al',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${poppins.className} antialiased`}>
                <main className="flex flex-col min-h-screen">{children}</main>
            </body>
        </html>
    )
}
