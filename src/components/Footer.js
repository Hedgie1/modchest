import Link from 'next/link'
import Image from 'next/image'
export default function Footer() {
    return (
        <footer class="text-white w-full pt-7 pb-7 shadow-footer align-bottom inset-x-0 bottom-0">
            <div class="flex flex-row justify-center align-center gap-5 md:gap-20 items-center font-normal text-lg md:text-xl ">
                <div className='flex flex-col gap-2 items-center justify-center'>
                    <Image src="/logo.png" width={100} height={100} />
                    <p class="text-white hover:text-gray-300">© ModChest, inc.</p>
                </div>
                <div className='flex flex-col gap-2 items-center justify-center'>
                    <p class="text-white font-semibold">Home</p>
                    <Link href="/mods"><p class="text-white hover:text-gray-300">Mods</p></Link>
                    <Link href="/modpacks"><p class="text-white hover:text-gray-300">Modpacks</p></Link>
                    <Link href="/blog"><p class="text-white hover:text-gray-300">Blog</p></Link>
                </div>
                <div className='flex flex-col gap-2 items-center justify-center'>
                    <p class="text-white font-semibold">Socials</p>
                    <Link href="https://instagram.com"><p class="text-white hover:text-gray-300">Instagram</p></Link>
                    <Link href="https://discord.com"><p class="text-white hover:text-gray-300">Discord</p></Link>
                    <Link href="https://github.com"><p class="text-white hover:text-gray-300">Github</p></Link>
                </div>
                <div className='flex flex-col gap-2 items-center justify-center'>
                    <p class="text-white font-semibold">Alternatives</p>
                    <Link href="https://curseforge.com"><p class="text-white hover:text-gray-300">CurseForge</p></Link>
                    <Link href="https://modrinth.com"><p class="text-white hover:text-gray-300">Modrinth</p></Link>
                </div>

            </div>
        </footer >
    )
}