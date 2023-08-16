import { InferGetServerSidePropsType } from 'next';
import { getAllPosts } from '../../app/lib/sanity/client';
import { urlForImage } from '../../app/lib/sanity/image';
import BrutalDiv from 'packages/frontend/app/components/brutal-div';
import Image from 'next/image';
import moment from 'moment';

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
  console.log(posts[0]);
  console.log(urlForImage(posts[0].mainImage)?.src);
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-x-16">
        {posts.map((post, index) => {
          return (
            <BrutalDiv
              hoverable={true}
              imageSrc={urlForImage(post?.mainImage)?.src}
              className={`bg-indigo-300 col-span-3 lg:col-span-1 h-auto`}
            >
              <div className="p-4">
                <h3 className='truncate'>{post.title}</h3>
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
                  <span className='pl-2 pt-1'>{post?.author?.name}</span>
                </div>

                <div className=' text-right'>
                  <span className='text-right'>{moment(post._createdAt).format('LL')}</span>
                </div>
              </div>
            </BrutalDiv>
          );
        })}
      </div>
    </div>
  );
}
