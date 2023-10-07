import Link from "next/link";

export default function Navbar() {
    return (
        <div className="relative flex items-center justify-between w-full px-24 py-12 text-sm">
            <Link href="/" className="text-lg font-medium font-display">Claretta</Link>
            <ul className="absolute inset-x-0 flex items-center justify-center space-x-8 pointer-events-none">
                <li className="pointer-events-auto">
                    <Link href="/" className={`${null ? "font-semibold" : ""}`}>Home</Link>
                </li>
                <li className="pointer-events-auto">
                    <Link href="/products" className={`${null ? "font-semibold" : ""}`}>Products</Link>
                </li>
                <li className="pointer-events-auto">
                    <Link href="/contacts" className={`${null ? "font-semibold" : ""}`}>Contacts</Link>
                </li>
            </ul>
            <div>
                <input type="text" placeholder="Search" />
            </div>
        </div>
    )
}