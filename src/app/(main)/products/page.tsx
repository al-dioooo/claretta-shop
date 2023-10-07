import Link from "next/link"

export default function Products() {
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

    const products = [
        {
            id: 1,
            name: "Product 1",
            image: "https://placehold.co/400x500/F5F5F5/31343C?font=source-sans-pro&text=400x500",
            description: "Product Description."
        },
        {
            id: 2,
            name: "Product 2",
            image: "https://placehold.co/400x500/F5F5F5/31343C?font=source-sans-pro&text=400x500",
            description: "Product Description."
        },
        {
            id: 3,
            name: "Product 3",
            image: "https://placehold.co/400x500/F5F5F5/31343C?font=source-sans-pro&text=400x500",
            description: "Product Description."
        },
        {
            id: 4,
            name: "Product 4",
            image: "https://placehold.co/400x500/F5F5F5/31343C?font=source-sans-pro&text=400x500",
            description: "Product Description."
        }
    ]

    return (
        <>
            <section id="header" className="bg-[#C1DCDC] rounded-3xl p-8 mx-24 relative overflow-hidden flex items-center justify-center">
                <h1 className="text-2xl font-medium text-center">
                    Product List
                </h1>
            </section>
            <section id="list" className="flex py-16 mx-24 space-x-4">
                <div className="w-1/5 space-y-8 text-sm">
                    <p className="text-lg font-medium">All Category</p>
                    <nav>
                        <ul className="space-y-4">
                            {categories.map((row) => (
                                <li>
                                    <Link href="/">{row.name}</Link>
                                </li>
                            ))}
                    </ul>
                </nav>
            </div>
            <div className="grid w-4/5 grid-cols-5 gap-8">
                {products.map((row) => (
                    <div className="space-y-4">
                        <img className="aspect-[4/5] object-cover rounded-xl" src={row.image} alt={row.name} />
                        <h5 className="font-medium">{row.name}</h5>
                        <span><p className="text-sm text-neutral-500">{row.description}</p></span>
                    </div>
                ))}
            </div>
        </section >
        </>
    )
}