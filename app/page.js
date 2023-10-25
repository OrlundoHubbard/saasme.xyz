import Image from 'next/image'
import Link from 'next/link';
import getPostMetadata from '@/components/getPostMetadata';
import PostPreview from '@/components/PostPreview';


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
        <div className=" mt-10 container mx-auto">
          <p className=' px-6 text-2xl font-bold'>
            Latest Trends
          </p>
          <div className="mt-11">{postPreviews}</div>
        </div>
      </section>
    </>
  )
}

export default Home;
