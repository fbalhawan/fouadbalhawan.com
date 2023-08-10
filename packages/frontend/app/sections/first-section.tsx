import Image, { StaticImageData } from 'next/image';
import profilePic from '../../public/images/profile-2.png';
import { FormattedMessage, useIntl, injectIntl } from 'react-intl';

export default function FirstSection() {
  const intl = useIntl();
  return (
    <div
      className={`flex flex-wrap justify-center max-w-screen-xl mx-auto lg:justify-start`}
    >
      <div className="mt-6 relative basis-1/2 order-last lg:order-first">
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
          className={`relative max-w-xs sm:max-w-xl float-right order-first lg:order-last`}
          loading="lazy"
          quality={10}
          src={profilePic}
          alt="Picture of author"
        />
      </div>
    </div>
  );
}
