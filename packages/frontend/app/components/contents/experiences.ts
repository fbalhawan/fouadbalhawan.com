import { FormattedMessage, useIntl, injectIntl } from 'react-intl';
type Experience = {
  company: string;
  title: string;
  body: Array<string>;
  imageSrc: string;
  skills: Array<string>;
  link: string;
};
export default function Experiences(): Experience[] {
  const intl = useIntl();
  return [
    {
      company: intl.formatMessage({id: 'konfidio'}),
      title: intl.formatMessage({id: 'konfidio_title'}),
      body: [intl.formatMessage({ id: 'konfidio_desc' })],
      imageSrc: '/images/trucks.jpg',
      skills: [
        'Node.js',
        'TypeScript',
        'React',
        'PostgreSQL',
        'Redis',
        'Queues',
        'Solidity',
        'Kubernetes',
        'Docker',
        'Git',
      ],
      link: '',
    },
    {
      company: intl.formatMessage({id: 'mg'}),
      title: intl.formatMessage({id: 'mg_title'}),
      body: [
        intl.formatMessage({id: 'konfidio_desc'})
      ],
      imageSrc: '/images/makersground-rect.jpg',
      skills: [
        'Node.js',
        'TypeScript',
        'MySQL',
        'ReactNative',
        'IoT',
        'RaspberryPi',
      ],
      link: '',
    },
    {
      company: intl.formatMessage({id: 'ba'}),
      title: intl.formatMessage({id: 'ba_title'}),
      body: [
        intl.formatMessage({id: 'ba_desc'})
      ],
      imageSrc: '/images/binary.jpg',
      skills: [
        'Node.js',
        'TypeScript',
        'MySQL',
        'Charts',
        'React',
        'Docker',
        'Kubernetes',
        'Docker',
        'Git',
        'IoT',
        'Ejs',
        'RaspberryPi',
      ],
      link: '',
    },
  ];
}
