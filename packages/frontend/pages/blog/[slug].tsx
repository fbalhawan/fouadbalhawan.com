import { getAllPostsSlugs, getPostBySlug, client } from 'lib/sanity/client';
import { InferGetServerSidePropsType } from 'next';
import { urlForImage } from '../../app/lib/sanity/image';
import imageUrlBuilder from '@sanity/image-url';
import { PortableText } from '../../app/lib/sanity/plugins/serializer';
// import { PortableText } from '@portabletext/react';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import Image from 'next/image';
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
export async function getServerSideProps({ params }: any) {
  const post = await getPostBySlug(params.slug);
  return {
    props: {
      post,
    },
  };
}

function urlFor(source: string) {
  if (client) {
    return imageUrlBuilder(client).image(source);
  } else {
    return imageUrlBuilder();
  }
}

const ptComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      if (typeof urlFor !== 'undefined' && value) {
        const src = urlFor(value).fit('max').auto('format');
        return (
          <img alt={value.alt || ' '} loading="lazy" src={src.toString()} />
        );
      }
    },
    code: ({ value }: any) => {
      console.log("value: ",value);
      return (
      <pre data-language={value.language} className=' p-5 bg-slate-300 rounded-xl'>
        <code>{value.code}</code>
      </pre>
      );
    },
  },
};

export default function BlogPost({
  post,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const imageProps = post?.mainImage ? urlForImage(post?.mainImage) : null;

  const AuthorimageProps = post?.author?.image
    ? urlForImage(post.author.image)
    : null;

  return (
    <div className="container mx-auto mb-20">
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
      <div>
        {post.body && (
          <PortableText value={post.body} components={ptComponents} />
        )}
      </div>
    </div>
  );
}
