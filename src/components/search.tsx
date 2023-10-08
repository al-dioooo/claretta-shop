import Modal from "@/components/modal"
import { Search as SearchIcon } from "@/components/icons/outline"
import { useCallback, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

const Content = ({ onSubmit }: { onSubmit: (value: any) => void }) => {
    const searchParams = useSearchParams()

    const [search, setSearch] = useState(searchParams.get("search") ?? undefined)

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

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    const handleSubmit = (e: any) => {
        e.preventDefault()

        onSubmit("/product?" + createQueryString('search', search ?? ""))
    }

    return (
        <div className="divide-y">
            <form onSubmit={handleSubmit} className="flex items-center">
                <div className="w-5 h-5 text-neutral-500"><SearchIcon className="w-5 h-5 text-neutral-500" strokeWidth={1.5} /> </div>
                <input onChange={(e) => setSearch(e.target.value)} value={search} className="block w-full p-2 border-0 outline-none focus:ring-0" type="text" placeholder="What are you looking for?" />
            </form>
        </div>
    )
}

export default function Search() {
    const router = useRouter()

    const [isOpen, setIsOpen] = useState(false)

    const handleSubmit = (value: any) => {
        router.push(value)

        closeModal()
    }

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    return (
        <>
            <button className="p-2 border rounded-full" onClick={() => openModal()}><SearchIcon className="w-4 h-4" strokeWidth={1.5} /></button>
            <Modal isOpen={isOpen} onClose={() => closeModal()} title={false} content={<Content onSubmit={handleSubmit} />} size="xl" closable={true} />
        </>
    )
}