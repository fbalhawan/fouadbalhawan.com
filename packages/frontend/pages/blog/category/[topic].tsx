import { InferGetServerSidePropsType } from "next";
import {
  getAllCategories,
  getPostsByCategory,
  getSettings,
} from "../../../app/lib/sanity/client";
import { urlForImage } from "../../../app/lib/sanity/image";
import BrutalDiv from "../../../app/components/brutal-div";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import Image from "next/image";
import Head from "next/head";
import moment from "moment";
import heroImage from "../../../public/images/blog-hero.png";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Post } from "@fouadbalhawan.com/schemas";
// import BrutalInput from 'packages/frontend/app/components/brutal-input';

export async function getServerSideProps({ params }: any) {
  const posts: Array<Post> = await getPostsByCategory(params.topic);
  const topics: {
    category: string;
  }[] = await getAllCategories();

  const settings: any = await getSettings();
  return {
    props: {
      posts,
      topics,
      settings: settings[1],
    },
  };
}

export default function Blog({
  posts,
  topics,
  settings,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{settings.title}</title>
        <meta name="description" content={settings.description}></meta>
        <meta name="keywords" content={settings.keywords}></meta>
      </Head>
      <div className="mx-auto mb-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-10 gap-x-16 my-10">
            <Link className="my-auto" href="/">
              <ArrowBackIosNewRoundedIcon sx={{ fontSize: 50 }} />
            </Link>

            <h1 className="my-auto">Blog</h1>

            {/* <BrutalInput placeholder='Search' className=' text-black' /> */}
          </div>
        </div>
        <div id="blog-hero" className="w-full relative mb-20">
          <Image src={heroImage} alt="Hero" className="w-full object-cover" />
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-6">
            <div className="col-span-1">
              <h2>Tags</h2>
              <ul className="ml-4">
                {topics.map((topic, index) => {
                  return (
                    <li key={index}>
                      <Link href={`/blog/category/${topic.category}`}>
                        {topic.category}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="grid grid-cols-3 gap-x-16 col-span-5 gap-y-2 m-4">
              {posts.map((post, index) => {
                return (
                  <BrutalDiv
                    key={index}
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
                          src={urlForImage(post?.author?.image)?.src || ""}
                        />
                        <span className="pl-2 pt-1">{post?.author?.name}</span>
                      </div>

                      <div className=" text-right">
                        <span className="text-right">
                          {moment(post._createdAt).format("LL")}
                        </span>
                      </div>
                    </div>
                  </BrutalDiv>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
