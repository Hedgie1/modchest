import { getAllPostIds, getPostData } from '../../lib/posts';
// Add this import
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id, 'modpacks');

    return {
        props: {
            postData,
        },
    };
}
export async function getStaticPaths() {
    const paths = getAllPostIds('modpacks');
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
                <article className='text-white font-normal text-xl mt-5 mr-10 ml-10 md:ml-20 md:mr-20 lg:ml-64 lg:mr-64 relative pb-20'>
                    <div className='flex flex-row mb-10 align-text-bottom'>
                        <img className='mr-10 w-32 h-32 md:w-40 md:h-40' src={'/' + postData.id + ".png"} />
                        <div className='flex flex-col'>
                            <h1 className='text-4xl md:text-6xl font-bold pb-3'>{postData.title}</h1>
                            <p className='text-xl font-normal'>Version: {postData.version}</p>
                            <p className='text-xl font-normal'>Downloads: {postData.downloads}</p>
                        </div>
                    </div>
                    <div className='' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                </article>
                <Footer />
            </main>

        </div>
    );
}