import { getSortedPostsData } from '../../lib/posts';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useState } from 'react';


export function getStaticProps() {
    const allPostsData = getSortedPostsData('mods');
    return {
        props: {
            allPostsData,
        },
    };
}
export default function ModList(props) {

    const [viewMode, setViewMode] = useState('downloads');


    const handleChangeViewMode = (e) => {
        const value = e.target.value
        setViewMode(value);

        if (value == 'date') {
            props.allPostsData.sort((a, b) => {
                if (a.date < b.date) {
                    return 1;
                } else {
                    return -1;
                }
            })
        } else {
            props.allPostsData.sort((a, b) => {
                if (a.downloads < b.downloads) {
                    return 1;
                } else {
                    return -1;
                }
            })
        }

    };

    const viewModeOptions = [
        { label: 'Total Downloads', value: 'downloads' },
        { label: 'By Date', value: 'date' },
    ]

    return (
        <div>
            <Head>
                <title>Mods</title>
            </Head>

            <main className='min-h-screen'>
                <Navbar />
                <p className='text-white mt-5 text-center text-3xl font-bold'>Mods</p>
                <div className='flex flex-row justify-center m-10 gap-5 font-semibold'>
                    <p className='text-white text-lg p-1'>Sort by:</p>
                    <select
                        className='border-gray-200 border-2 justify-center rounded-md px-4 py-2'
                        onChange={handleChangeViewMode}
                        value={viewMode}
                    >
                        {viewModeOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='grid justify-center m-10 gap-5 font-semibold'>
                    {props.allPostsData.map((post) => (
                        <article className='grid grid-cols-3 text-white border rounded-2xl w-96 sm:w-[36rem] md:w-[48rem] bg-zinc-800 border-zinc-900 p-5 '>

                            <div className='flex align-middle'>
                                <Image src={"/" + post.id + ".png"} alt={post.title} width={100} height={100} className='rounded-2xl' />
                            </div>

                            <div className='flex flex-col'>
                                <Link className=' font-bold text-xl line-clamp-2' href={`/mods/${post.id}`}> {post.title} </Link>
                                <p className='font-normal line-clamp-2'>{post.description}</p>
                            </div>
                            <div className='flex sm:hidden flex-col align-middle text-right'>
                                <p>🎮 {post.version}</p>
                                <p>⬇️ {post.downloads}</p>
                                <p>🔺 {post.date}</p>
                            </div>
                            <div className='hidden sm:flex flex-col align-middle text-right'>
                                <p>Version: <b>{post.version}</b></p>
                                <p>Downloads: <b>{post.downloads}</b></p>
                                <p>Updated at: <b>{post.date}</b></p>
                            </div>
                        </article>
                    ))}
                </div>
                <Footer />
            </main>
        </div>
    );
}