'use client'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { AnimatePresence } from 'framer-motion'

export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Navbar />
            <AnimatePresence mode="wait">
                <main className="flex flex-col min-h-screen">{children}</main>
            </AnimatePresence>
            <Footer />
        </>
    )
}
