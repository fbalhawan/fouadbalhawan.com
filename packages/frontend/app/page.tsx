import styles from '../styles/page.module.css';
import BrutalDiv from './components/brutal-div';
import BrutalBtn from './components/brutal-btn';
import BrutalInput from './components/brutal-input';
import carPic from "/public/images/car.jpg";
import SearchIcon from "./components/icons/search-icon";
import experiences from './components/contents/experience.json';

import DevIcon from './components/dev-icon';
import FirstSection from './sections/first-section';
import SkillsSection from './sections/skills-section';
import ExperienceSection from './sections/experience-section';

export default function Index() {


  return (
    <div className="mx-auto">
      {/* First Section */}
      <FirstSection />

      {/* What I do section */}
      <div className='flex flex-col flex-wrap justify-center  mt-10 sm:mt-20'>
        <div className='relative'>
          <h1 className=' text-center'>My Technical Skills</h1>
        </div>
      </div>

      <SkillsSection />

      <div className='flex flex-col flex-wrap justify-center  my-10 sm:mt-20'>
        <div className='relative'>
          <h1 className=' text-center'>My Roles</h1>
        </div>
      </div>

      {
        experiences?.map((experience, i) => {
          {
            return (<ExperienceSection
              title={experience.title}
              company={experience.company}
              body={
                <ul className={`list-disc space-y-8`}>
                  {experience.body.map((bp, i) => {
                    return <li>{bp}</li>
                  })}
                </ul>
              }
              imageSrc={experience.imageSrc}
              reverse={i % 2 ? true : false}
              skills={experience.skills}
            />)
          }
        })
      }

      <div className='flex flex-col flex-wrap justify-center  my-10 sm:mt-20'>
        <div className='my-0 mx-auto inline-block text-center'>
          <h3>And many more</h3>
          <BrutalBtn>Download Resume</BrutalBtn>
        </div>
      </div>
    </div>
  );
}
