import FirstSection from '../app/sections/first-section';
import SkillsSection from '../app/sections/skills-section';
import ExperienceSection from '../app/sections/experience-section';
import { useIntl } from 'react-intl';
import Footer from '../app/components/footer';
import BrutalBtn from 'components/brutal-btn';
import { InferGetServerSidePropsType } from 'next';
import { getExperiences, getSettings } from 'lib/sanity/client';
import Head from 'next/head';
import {  Experience } from '@fouadbalhawan.com/schemas';

export async function getServerSideProps(props: any) {
  const settings: any = await getSettings();
  const experiences: Experience[] = await getExperiences(3);
  const sortedExperiences: Experience[] = experiences.sort((a, b) => {
    return a.index - b.index;
  });

  return {
    props: {
      settings: settings[0],
      experiences: sortedExperiences
    },
  };
}

export default function Index({
  settings,
  experiences
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const intl = useIntl();

  return (
    <>
      <Head>
        <title>{settings.title}</title>
        <meta name="description" content={settings.description}></meta>
        <meta name="keywords" content={settings.keywords}></meta>
      </Head>

      <div className="mx-auto">
        <div className="flex flex-row-reverse pt-5 max-w-screen-xl mx-auto">
          {/* <a href='/blog'>Blog</a> */}
          <BrutalBtn href="/blog">Blog</BrutalBtn>
        </div>
        {/* First Section */}
        <FirstSection />

        {/* What I do section */}
        <div className="flex flex-col flex-wrap justify-center  mt-10 sm:mt-20">
          <div className="relative">
            <h1 className=" text-center">
              {intl.formatMessage({ id: 'my_technical_skills' })}
            </h1>
          </div>
        </div>

        <div className='container mx-auto'>
          <SkillsSection />
        </div>

        <div className="flex flex-col flex-wrap justify-center  my-10 sm:mt-20">
          <div className="relative">
            <h1 className=" text-center">
              {"My Roles"}
            </h1>
          </div>
        </div>
        
        <div className='container mx-auto shadow-[0px_6px_0px_0px_rgba(0,0,0)] bg-green-50 border-2 border-black rounded-xl'>
        {experiences?.map((experience, i) => {
          {
            if(i%2){
              experience.reverse = true;
            }
            else{
              experience.reverse = false;
            }
            return (
              <ExperienceSection
                key={`experiences-${i}`}
                {...experience}
              />
            );
          }
        })}
        </div>
        {/* Footer section */}
        <Footer />
      </div>
    </>
  );
}
