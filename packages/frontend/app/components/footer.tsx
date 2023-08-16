'use client';
import { useIntl } from 'react-intl';
import BrutalBtn from './brutal-btn';

export default function Footer() {
  const RESUME_URL = process.env.NEXT_PUBLIC_RESUME_URL;
  const intl = useIntl();
  return (
    <div className=" grid grid-cols-4 justify-center  my-10 sm:mt-20">
      <div className="my-0 inline-block text-center lg:col-span-3 col-span-4">
        <h3>{intl.formatMessage({ id: 'and_many_more' })}</h3>
        <BrutalBtn href={RESUME_URL} target="blank">
          {intl.formatMessage({ id: 'download_resume' })}
        </BrutalBtn>
      </div>
      <div
        className={`inline-block text-center col-span-4 lg:col-span-1 mt-20 lg:mt-0`}
      >
        <h3>{intl.formatMessage({ id: 'find_me' })}</h3>
        <a href="https://github.com/fbalhawan" target="_blank">
          <i className="devicon-github-original text-6xl"></i>
        </a>

        <a href="https://www.linkedin.com/in/fuadb/" target="_blank">
          <i className="devicon-linkedin-plain text-6xl"></i>
        </a>
      </div>
    </div>
  );
}
