import { getPostBySlug, client } from 'lib/sanity/client';
import { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { urlForImage } from '../../app/lib/sanity/image';
import imageUrlBuilder from '@sanity/image-url';
import { PortableText } from '../../app/lib/sanity/plugins/serializer';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import Image from 'next/image';
import Link from 'next/link';
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

  return (
    <>
    <Head>
      <title>${post.title} | BlogPost</title>
      </Head>
    <div className="container mx-auto mb-20">
      <div className="grid grid-cols-10 gap-x-16 my-10">
        <Link className="my-auto" href="/blog">
          <ArrowBackIosNewRoundedIcon sx={{ fontSize: 50 }} />
        </Link>

        <h1 className="my-auto col-span-4">{post.title}</h1>

      </div>
      <div className="relative z-0 mx-auto aspect-video max-w-screen-2xl overflow-hidden rounded-xl mb-10">
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
    </>
  );
}
