import Experiences from '../app/components/contents/experiences';
import FirstSection from '../app/sections/first-section';
import SkillsSection from '../app/sections/skills-section';
import ExperienceSection from '../app/sections/experience-section';
import { useIntl } from 'react-intl';
import Footer from '../app/components/footer';
import BrutalBtn from 'components/brutal-btn';
import { InferGetServerSidePropsType } from 'next';
import { getSettings } from 'lib/sanity/client';
import Head from 'next/head';

export async function getServerSideProps() {
  const settings: any = await getSettings();
  return {
    props: {
      settings: settings[0],
    },
  };
}

export default function Index({
  settings,
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

        <SkillsSection />

        <div className="flex flex-col flex-wrap justify-center  my-10 sm:mt-20">
          <div className="relative">
            <h1 className=" text-center">
              {intl.formatMessage({ id: 'my_roles' })}
            </h1>
          </div>
        </div>

        {Experiences()?.map((experience, i) => {
          {
            return (
              <ExperienceSection
                title={experience.title}
                key={`experience_${i}`}
                company={experience.company}
                body={
                  <ul className={`list-disc space-y-8`}>
                    {experience.body.map((bp, i) => {
                      return <li key={`bp_${i}`}>{bp}</li>;
                    })}
                  </ul>
                }
                imageSrc={experience.imageSrc}
                reverse={i % 2 ? true : false}
                skills={experience.skills}
              />
            );
          }
        })}
        {/* Footer section */}
        <Footer />
      </div>
    </>
  );
}
