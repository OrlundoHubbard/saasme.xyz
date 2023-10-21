import Image from 'next/image'
import fs from "fs";
import Link from 'next/link';


const getPostMetadata = () => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const slugs = markdownPosts.map((file) => file.replace(".md", ""));
  return slugs;
}

const Home = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((slug) => (
    <div>
      <Link href={`/posts/${slug}`}>
        <h2>{slug}</h2>
      </Link>
    </div>
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
