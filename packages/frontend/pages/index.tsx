'use client';
import BrutalBtn from '../app/components/brutal-btn';
import experiences from '../app/components/contents/experience.json';
import FirstSection from '../app/sections/first-section';
import SkillsSection from '../app/sections/skills-section';
import ExperienceSection from '../app/sections/experience-section';

export default function Index() {
  const RESUME_URL = process.env.NEXT_PUBLIC_RESUME_URL;

  return (
    <div className="mx-auto">
      {/* First Section */}
      <FirstSection />

      {/* What I do section */}
      <div className="flex flex-col flex-wrap justify-center  mt-10 sm:mt-20">
        <div className="relative">
          <h1 className=" text-center">My Technical Skills</h1>
        </div>
      </div>

      <SkillsSection />

      <div className="flex flex-col flex-wrap justify-center  my-10 sm:mt-20">
        <div className="relative">
          <h1 className=" text-center">My Roles</h1>
        </div>
      </div>

      {experiences?.map((experience, i) => {
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

      <div className="flex flex-col flex-wrap justify-center  my-10 sm:mt-20">
        <div className="my-0 mx-auto inline-block text-center">
          <h3>And many more</h3>
          <BrutalBtn
            onClick={(event) => {
              window.open(RESUME_URL, '_blank');
            }}
          >
            Download My Resume
          </BrutalBtn>
          {/* https://drive.google.com/file/d/1l26F6bc58wU9aEVR6LDo8iTASNCZIexb/view?usp=sharing */}
        </div>
      </div>
    </div>
  );
}
