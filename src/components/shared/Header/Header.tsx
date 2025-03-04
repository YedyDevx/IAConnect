import Link from "next/link"

export default function Header () {
    return (
        <header className="bg-gray-800 p-4">
            <nav className="flex justify-center items-center gap-4">
                <Link href="/">Home</Link>
            </nav>
        </header>
    )
}
