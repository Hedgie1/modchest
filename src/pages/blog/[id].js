import { getAllPostIds, getPostData } from '../../lib/posts';
// Add this import
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id, 'blog');

    return {
        props: {
            postData,
        },
    };
}
export async function getStaticPaths() {
    const paths = getAllPostIds('blog');
    return {
        paths,
        fallback: false,
    };
}


export default function Mod({ postData }) {
    return (
        <div>
            <Head>
                <title>{postData.title}</title>
            </Head>

            <main className='min-h-screen'>
                <Navbar />
                <article className='text-white font-normal text-xl mr-10 ml-10 md:ml-20 md:mr-20 lg:ml-64 lg:mr-64 relative pb-20'>
                    <h1 className='text-5xl font-bold p-10'>{postData.title}</h1>
                    <div className='' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                </article>
                <Footer />
            </main>

        </div>
    );
}