'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function Products() {
    const searchParams = useSearchParams()

    const categories = [
        {
            id: 1,
            name: "Category 1",
            slug: "first-category",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            image: "https://placehold.co/400x600/F5F5F5/31343C?font=source-sans-pro&text=400x600"
        },
        {
            id: 2,
            name: "Category 2",
            slug: "second-category",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            image: "https://placehold.co/400x600/F5F5F5/31343C?font=source-sans-pro&text=400x600"
        },
        {
            id: 3,
            name: "Category 3",
            slug: "third-category",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            image: "https://placehold.co/400x600/F5F5F5/31343C?font=source-sans-pro&text=400x600"
        }
    ]

    const products = [
        {
            id: 1,
            name: "Product 1",
            slug: "first-product",
            image: "https://placehold.co/400x500/F5F5F5/31343C?font=source-sans-pro&text=400x500",
            description: "Product Description."
        },
        {
            id: 2,
            name: "Product 2",
            slug: "second-product",
            image: "https://placehold.co/400x500/F5F5F5/31343C?font=source-sans-pro&text=400x500",
            description: "Product Description."
        },
        {
            id: 3,
            name: "Product 3",
            slug: "third-product",
            image: "https://placehold.co/400x500/F5F5F5/31343C?font=source-sans-pro&text=400x500",
            description: "Product Description."
        },
        {
            id: 4,
            name: "Product 4",
            slug: "fourth-product",
            image: "https://placehold.co/400x500/F5F5F5/31343C?font=source-sans-pro&text=400x500",
            description: "Product Description."
        }
    ]

    return (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            <section id="header" className="bg-[#C1DCDC] rounded-3xl p-8 mx-24 relative overflow-hidden flex items-center justify-center">
                <h1 className="text-2xl font-medium text-center">
                    {searchParams.get("search") ? `You search for ${searchParams.get("search")}` : "Product List"}
                </h1>
            </section>
            <section id="list" className="flex py-16 mx-24 space-x-4">
                <div className="w-1/5 space-y-8 text-sm">
                    <Link href="/product" className="text-lg font-medium">All Category</Link>
                    <nav>
                        <ul className="space-y-4">
                            {categories.map((row) => (
                                <li>
                                    <Link href={`/product/${row.slug}`}>{row.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className="grid w-4/5 grid-cols-5 gap-8">
                    {products.map((row) => (
                        <Link href={`/product/detail/${row.slug}`} className="space-y-4">
                            <img className="aspect-[4/5] object-cover rounded-xl" src={row.image} alt={row.name} />
                            <h5 className="font-medium">{row.name}</h5>
                            <span><p className="text-sm text-neutral-500">{row.description}</p></span>
                        </Link>
                    ))}
                </div>
            </section >
        </motion.div>
    )
}