import { Facebook, Instagram, Love, TikTok } from "@/components/icons/outline"
import Link from "next/link"

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="w-full px-24 py-12 bg-[#C1DCDC] space-y-16">
            <div className="flex justify-between">
                <div>
                    <h6 className="text-lg font-medium font-display">
                        <Link href="/">Claretta</Link>
                    </h6>
                    <p className="mt-4 text-sm text-neutral-500">We help You find your dream fashion.</p>
                    <div className="flex items-center mt-8 space-x-4">
                        {/* Facebook */}
                        <a target="_blank" href="" className="p-2 border rounded-full border-neutral-500">
                            <Facebook className="w-6 h-6" strokeWidth={1.5} />
                        </a>
                        {/* Instagram */}
                        <a target="_blank" href="" className="p-2 border rounded-full border-neutral-500">
                            <Instagram className="w-6 h-6" strokeWidth={1.5} />
                        </a>
                        {/* TikTok */}
                        <a target="_blank" href="" className="p-2 border rounded-full border-neutral-500">
                            <TikTok className="w-6 h-6" strokeWidth={1.5} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between text-xs text-neutral-500">
                <span>Copyright &copy; {year} Claretta Indonesia. All Rights Reserved. </span>
                <span className="flex items-center">Created with <span className="p-1 mx-1 text-white bg-red-400 rounded-full"><Love className="w-3 h-3" strokeWidth={2} /></span> in Bogor City.</span>
            </div>
        </footer>
    )
}