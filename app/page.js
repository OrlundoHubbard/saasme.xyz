"use client"
import Image from 'next/image'
import Link from 'next/link';
import getPostMetadata from '@/components/getPostMetadata';
import PostPreview from '@/components/PostPreview';
import Subscribe from '../components/Subscribe';



const Home = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview
      key={post.slug} {...post} />
  ))

  return (
    <>
      <section className="px-6">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mt-10 text-7xl font-bold tracking-[1.2px] content-center">Build <span className="text-indigo-700">Ahead</span> of The Curve</h1>
          <p className='mt-4 font-bold text-gray-500'>Get the latest exploding SaaS trends sent straight to your inbox</p>
        </div>
      </section>
      {/* blog section */}

      <section className="px-6">
        <div className=" mt-10 container mx-auto  mx-w-2x">
          <p className=' px-6 text-2xl font-bold'>
            Latest Trends
          </p>
          <div className="grid grid-cols-3 gap-6 mt-11">{postPreviews}</div>
        </div>
      </section>

      {/*email section */}

      <section className="mt-40">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Discover <span className="text-indigo-700">SaaS Trends</span> Before They Take Off!
          </h2>
          <p className='mt-4 font-bold text-gray-500'>Get the latest exploding SaaS trends sent straight to your inbox</p>
          <Subscribe />
        </div>
      </section>
    </>
  )
}

export default Home;
