import { InferGetServerSidePropsType, } from 'next';
import { getAllPosts } from '../../app/lib/sanity/client';
import { urlForImage } from '../../app/lib/sanity/image';
import BrutalDiv from '../../app/components/brutal-div';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import Image from 'next/image';
import moment from 'moment';
import heroImage from '../../public/images/blog-hero.png';
import { useRouter } from 'next/navigation';
// import BrutalInput from 'packages/frontend/app/components/brutal-input';

type Asset = {
  _ref: string;
  _type: string;
};

type Upload = {
  previewImage: string;
};

type Image = {
  asset: Asset;
  _type: string;
  _upload: Upload;
};

type Slug = {
  current: string;
  _type: string;
};

type Author = {
  _id: string;
  name: string;
  slug: Slug;
  image: Image;
};

type Post = {
  _id: string;
  author: Author;
  _createdAt: string;
  title: string;
  slug: Slug;
  mainImage: Image;
  featured: any;
  categories: any;
  excerpt: any;
  publishedAt: string;
};

export async function getServerSideProps() {
  const posts: Array<Post> = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
}

export default function Blog({
  posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  return (
    <div className="mx-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-10 gap-x-16 my-10">
          <a className="my-auto" href="/">
            <ArrowBackIosNewRoundedIcon sx={{ fontSize: 50 }} />
          </a>

          <h1 className="my-auto">Blog</h1>

          {/* <BrutalInput placeholder='Search' className=' text-black' /> */}
        </div>
      </div>
      <div id="blog-hero" className="w-full relative mb-20">
        <Image
        src={heroImage}
        alt='Hero'
        className='w-full object-cover'
         />
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-x-16 gap-y-2">
          {posts.map((post, index) => {
            return (
              <BrutalDiv
                hoverable={true}
                onClick={() => {
                  try {
                    router.push(`blog/${post?.slug?.current}`);
                  } catch (e) {
                    console.error(e);
                  }
                }}
                imageSrc={urlForImage(post?.mainImage)?.src}
                className={`bg-indigo-300 col-span-3 lg:col-span-1 h-auto min-h-[500px]`}
              >
                <div className="p-4">
                  <h3 className="truncate">{post.title}</h3>
                </div>
                <div className="absolute bottom-0 p-4 grid grid-cols-2 w-full">
                  <div>
                    <Image
                      className="rounded-full inline"
                      width={25}
                      height={25}
                      alt="Profile Pic"
                      src={urlForImage(post?.author?.image)?.src || ''}
                    />
                    <span className="pl-2 pt-1">{post?.author?.name}</span>
                  </div>

                  <div className=" text-right">
                    <span className="text-right">
                      {moment(post._createdAt).format('LL')}
                    </span>
                  </div>
                </div>
              </BrutalDiv>
            );
          })}
        </div>
      </div>
    </div>
  );
}
