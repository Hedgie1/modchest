import { getSortedPostsData } from '../../lib/posts';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Image from 'next/image';

export function getStaticProps() {
    let allPostsData = getSortedPostsData('blog');
    allPostsData = allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    })
    return {
        props: {
            allPostsData,
        },
    };
}
export default function ModList(props) {
    return (
        <>
            <Head>
                <title>Mods</title>
            </Head>

            <main className='min-h-screen'>
                <Navbar />
                <p className='text-white mt-5 text-center text-3xl font-bold'>Blog</p>

                <div className='grid justify-center m-10 gap-5 font-semibold'>
                    {props.allPostsData.map((post) => (
                        <article className='grid grid-cols-2 text-white border rounded-2xl w-96 sm:w-[36rem] md:w-[48rem] bg-zinc-800 border-zinc-900 p-5 '>

                            <div className='flex flex-col'>
                                <Link className=' font-bold text-xl line-clamp-2' href={`/blog/${post.id}`}> {post.title} </Link>
                                <p className='font-normal line-clamp-2'>{post.description}</p>
                            </div>
                            <div className='flex flex-col align-middle text-right'>
                                <p>{post.date}</p>

                            </div>
                        </article>
                    ))}
                </div>
                <Footer />
            </main>
        </>
    );
}