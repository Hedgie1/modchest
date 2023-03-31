import Link from "next/link"

export default function Navbar() {
    return (
        <>

            <nav className="font-semibold text-gray-400 text-lg md:text-xl p-5 items-center justify-center flex mx-auto">
                <div className="flex items-center justify-items-center gap-7 md:gap-20">
                    <Link href="/" className="text-xl md:text-2xl">Modchest</Link>
                    <Link href="/mods/">Mods</Link>
                    <Link href="/modpacks/">Modpacks</Link>
                    <Link href="/blog/">Blog</Link>
                </div>
            </nav>
        </>
    )
}