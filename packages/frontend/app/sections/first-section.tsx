import Image, { StaticImageData } from 'next/image';
import profilePic from '../../public/images/profile-2.png';
import { useIntl } from 'react-intl';

export default function FirstSection() {
  const intl = useIntl();
  return (
    <div
      className={`flex flex-wrap justify-center max-w-screen-xl mx-auto lg:justify-start my-10`}
    >
      <div className="mt-6 relative basis-3/4 order-last lg:order-first">

        <h3 className="">
          {intl.formatMessage({ id: 'intro' })}
        </h3>

        <h1 className="">
          {intl.formatMessage({ id: 'title' })}
        </h1>

        <h3>
          {intl.formatMessage({ id: 'bio' })}
        </h3>

      </div>

      <div className="basis-1/2">
        <Image
          className={`relative max-w-sm sm:max-w-xl float-right order-first lg:order-last`}
          loading='eager'
          quality={8}
          src={profilePic}
          alt="Picture of author"
        />
      </div>
    </div>
  );
}
