'use client'

import { ArrowNarrowRight, BoxSeam, Discount, Plant } from '@/components/icons/outline'
import axios from 'axios'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
    const bests = [
        {
            id: 1,
            name: "Product 1",
            image: "/assets/img/products/1.jpeg",
            description: "Product Description."
        },
        {
            id: 2,
            name: "Product 2",
            image: "/assets/img/products/2.jpeg",
            description: "Product Description."
        },
        {
            id: 3,
            name: "Product 3",
            image: "/assets/img/products/3.jpeg",
            description: "Product Description."
        }
    ]

    const abouts = [
        {
            id: 1,
            icon: <Plant className="w-8 h-8" strokeWidth={1} />,
            title: "Eco Friendly",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora quasi earum quas eaque consequatur saepe"
        },
        {
            id: 2,
            icon: <BoxSeam className="w-8 h-8" strokeWidth={1} />,
            title: "Fast Shipping",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora quasi earum quas eaque consequatur saepe"
        },
        {
            id: 3,
            icon: <Discount className="w-8 h-8" strokeWidth={1} />,
            title: "Discounts",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora quasi earum quas eaque consequatur saepe"
        }
    ]

    const categories = [
        {
            id: 1,
            name: "Category 1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            image: "https://placehold.co/400x600/F5F5F5/31343C?font=source-sans-pro&text=400x600"
        },
        {
            id: 2,
            name: "Category 2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            image: "https://placehold.co/400x600/F5F5F5/31343C?font=source-sans-pro&text=400x600"
        },
        {
            id: 3,
            name: "Category 3",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            image: "https://placehold.co/400x600/F5F5F5/31343C?font=source-sans-pro&text=400x600"
        }
    ]

    const [bestProductData, setBestProductData] = useState(bests)
    const [aboutData, setAboutData] = useState(abouts)
    const [categoryData, setCategoryData] = useState(categories)

    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get("http://claretta-dashboard.test/api/home")
        }

        fetch()
    }, [])

    return (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            <section id="hero" className="bg-[#C1DCDC] rounded-3xl p-8 mx-24 relative overflow-hidden">
                <div className="flex flex-col justify-between w-1/2 space-y-24">
                    <h1 className="text-5xl font-black leading-tight w-72">
                        October Sale has Come!
                    </h1>
                    <Link href="/product" className="flex items-center justify-between w-1/2 py-2 pl-4 pr-2 bg-white rounded-xl">
                        <span>Discover More</span>
                        <div className="bg-[#C1DCDC] p-2 rounded-lg">
                            <ArrowNarrowRight className="w-6 h-6" strokeWidth={1.5} />
                        </div>
                    </Link>
                </div>
                <div className="absolute inset-y-0 flex right-8">
                    <div className="relative flex justify-center">
                        <img className="h-full z-[1]" src="/assets/img/home/product-cutout.png" alt="Product Cut-out" />
                        <div className="absolute inset-x-0 w-full h-auto rounded-t-full rounded-bl-full bg-neutral-800 -bottom-16 aspect-square"></div>
                    </div>
                </div>
            </section>
            <section id="body" className="flex py-16 mx-24 space-x-4">
                <div className="w-1/5">
                    <h3 className="text-2xl font-bold">
                        Best Selling Products
                    </h3>
                    <p className="mt-4 text-sm text-neutral-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <button className="bg-[#C1DCDC] mt-8 flex items-center px-4 py-2 space-x-2 rounded-lg text-sm">
                        <span>See More</span>
                        <span><ArrowNarrowRight className="w-6 h-6" strokeWidth={1} /></span>
                    </button>
                </div>
                <div className="grid w-4/5 grid-cols-3 gap-8">
                    {bestProductData.map((row) => (
                        <div className="space-y-4">
                            <img className="aspect-[4/5] object-cover rounded-xl" src={row.image} alt={row.name} />
                            <h5 className="font-medium">{row.name}</h5>
                            <span><p className="text-sm text-neutral-500">{row.description}</p></span>
                        </div>
                    ))}
                </div>
            </section>
            <section id="about" className="py-16 mx-24 space-y-12">
                <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-center">About Us</h3>
                    <p className="text-sm text-center text-neutral-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis omnis quas vitae adipisci</p>
                </div>
                <div className="flex justify-between gap-12">
                    {aboutData.map((row) => (
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="rounded-full bg-[#C1DCDC] p-4">
                                {row.icon}
                            </div>
                            <p className="text-sm font-semibold">{row.title}</p>
                            <p className="text-sm text-neutral-500">{row.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section id="categories">
                <div className="pt-16 pb-24 space-y-2">
                    <h3 className="text-2xl font-bold text-center">Categories</h3>
                    <p className="text-sm text-center text-neutral-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis omnis quas vitae adipisci</p>
                </div>
                <div className="bg-[#C1DCDC] py-12 px-24">
                    <div className="flex justify-between gap-24">
                        {categoryData.map((row, index) => (
                            <div className={`${index === 0 || index === categories.length - 1 ? "-mt-24" : ""} text-center text-sm space-y-4`}>
                                <img className="aspect-[9/16] rounded-xl object-cover" src={row.image} alt={row.name} />
                                <div><p className="text-lg font-semibold">{row.name}</p></div>
                                <div><p className="text-neutral-500">{row.description}</p></div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <button className="flex items-center px-4 py-2 mt-8 space-x-2 text-sm bg-white rounded-lg">
                            <span>Discover</span>
                            <span><ArrowNarrowRight className="w-6 h-6" strokeWidth={1} /></span>
                        </button>
                    </div>
                </div>
            </section>
            <section id="instagram" className="py-16 mx-24">
                <div className="pt-16 pb-24 space-y-2">
                    <h3 className="text-2xl font-bold">Follow Our Instagram</h3>
                    <p className="text-sm text-neutral-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis omnis quas vitae adipisci</p>
                </div>
                <div className="grid grid-cols-5 gap-8">
                    {[...Array(10)].map(() => (
                        <div className="w-full h-full bg-neutral-100 aspect-square rounded-xl"></div>
                    ))}
                </div>
            </section>
        </motion.div>
    )
}
