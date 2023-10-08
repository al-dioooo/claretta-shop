'use client'

import { WhatsApp } from "@/components/icons/outline"
import { motion } from "framer-motion"
import Link from "next/link"

export default function ProductDetail({ params }: { params: { slug: string } }) {
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
            image: "https://placehold.co/400x400/F5F5F5/31343C?font=source-sans-pro&text=400x400",
            description: "Product Description.",
            price: 100000.00
        },
        {
            id: 2,
            name: "Product 2",
            slug: "second-product",
            image: "https://placehold.co/400x400/F5F5F5/31343C?font=source-sans-pro&text=400x400",
            description: "Product Description.",
            price: 100000.00
        },
        {
            id: 3,
            name: "Product 3",
            slug: "third-product",
            image: "https://placehold.co/400x500/F5F5F5/31343C?font=source-sans-pro&text=400x500",
            description: "Product Description.",
            price: 100000.00
        },
        {
            id: 4,
            name: "Product 4",
            slug: "fourth-product",
            image: "https://placehold.co/400x500/F5F5F5/31343C?font=source-sans-pro&text=400x500",
            description: "Product Description.",
            price: 100000.00
        }
    ]

    type ProductType = {
        id: number,
        name: string,
        slug: string,
        image: string,
        description: string,
        price: number
    }

    const product: ProductType = products.find((row) => row.slug === params.slug)

    return (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            <section id="detail" className="flex py-16 mx-24 space-x-8">
                <div className="w-1/3">
                    <img className="object-cover w-full aspect-square rounded-3xl" src={product?.image} alt={product?.name} />
                </div>
                <div className="flex flex-col justify-between w-2/3">
                    <div>
                        <h1 className="text-2xl font-medium">{product?.name}</h1>
                        <h6 className="text-xl font-medium text-teal-500 ">{Intl.NumberFormat("id-Id", { style: 'currency', currency: "IDR" }).format(product?.price)}</h6>
                        <p className="mt-8 text-sm text-neutral-500">{product?.description}</p>
                    </div>
                    <a href={`https://wa.me/6285173075151?text=I%20want%20to%20order%20${product.name}`} target="_blank" className="pl-4 pr-2 py-2 w-max rounded-xl bg-[#C1DCDC] flex items-center justify-between space-x-8">
                        <span>Order via WhatsApp</span>
                        <div className="p-2 bg-white rounded-lg">
                            <WhatsApp className="w-6 h-6" strokeWidth={1.5} />
                        </div>
                    </a>
                </div>
            </section>
        </motion.div>
    )
}