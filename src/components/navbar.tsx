import Link from "next/link"
import { usePathname } from "next/navigation"
import Search from "./search"

export default function Navbar() {
    const pathname = usePathname()

    return (
        <div className="relative flex items-center justify-between w-full px-24 py-12 text-sm">
            <Link href="/" className="text-lg font-medium font-display">Claretta</Link>
            <ul className="absolute inset-x-0 flex items-center justify-center space-x-8 pointer-events-none">
                <li className="pointer-events-auto">
                    <Link href="/" className={`${pathname === "/" ? "font-semibold" : ""} transition-all`}>Home</Link>
                </li>
                <li className="pointer-events-auto">
                    <Link href="/product" className={`${pathname === "/product" ? "font-semibold" : ""} transition-all`}>Product</Link>
                </li>
                <li className="pointer-events-auto">
                    <Link href="/contact" className={`${pathname === "/contact" ? "font-semibold" : ""} transition-all`}>Contact</Link>
                </li>
            </ul>
            <div>
                <Search />
            </div>
        </div>
    )
}