'use client';
import Experiences from '../app/components/contents/experiences';
import FirstSection from '../app/sections/first-section';
import SkillsSection from '../app/sections/skills-section';
import ExperienceSection from '../app/sections/experience-section';
import { useIntl } from 'react-intl';
import Footer from '../app/components/footer';
export default function Index() {
  const intl = useIntl();
  return (
    <div className="mx-auto">
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
              company={experience.company}
              body={
                <ul className={`list-disc space-y-8`}>
                  {experience.body.map((bp, i) => {
                    return <li>{bp}</li>;
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
  );
}
