import { getAllPostsSlugs, getPostBySlug } from 'lib/sanity/client';
import { InferGetServerSidePropsType } from 'next';
import { urlForImage } from '../../app/lib/sanity/image';
import { PortableText } from '../../app/lib/sanity/plugins/portabletext';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import Image from 'next/image';
export async function getServerSideProps({ params }: any) {
  const post = await getPostBySlug(params.slug);
  return {
    props: {
      post,
    },
  };
}

export default function BlogPost({
  post,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(post);
  const imageProps = post?.mainImage ? urlForImage(post?.mainImage) : null;

  const AuthorimageProps = post?.author?.image
    ? urlForImage(post.author.image)
    : null;

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-10 gap-x-16 my-10">
        <a className="my-auto" href="/blog">
          <ArrowBackIosNewRoundedIcon sx={{ fontSize: 50 }} />
        </a>

        <h1 className="my-auto col-span-4">{post.title}</h1>

        {/* <BrutalInput placeholder='Search' className=' text-black' /> */}
      </div>
      <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
        {imageProps && (
          <Image
            src={imageProps.src}
            alt={post.mainImage?.alt || 'Thumbnail'}
            loading="eager"
            fill
            sizes="100vw"
            className="object-cover"
          />
        )}
      </div>
      <div>{post.body && <PortableText value={post.body} />}</div>
    </div>
  );
}
