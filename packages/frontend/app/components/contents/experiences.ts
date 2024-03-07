import { useIntl } from 'react-intl';
import Experience from 'types/Experience';

export default function Experiences(): Experience[] {
  const intl = useIntl();
  return [
    {
      company: intl.formatMessage({id: 'nce'}),
      title: intl.formatMessage({id: 'nce_title'}),
      body: [
        intl.formatMessage({id: 'nce_desc'})
      ],
      imageSrc: '/images/1nce.jpg',
      skills: ["Node.js","TypeScript","PostgreSQL","DynamoDB","IoT","Serverless", "Terraform", "Amazon Web Services", "Kafka", "Angular"],
      link: '',
      bgColor: ''
    },
    {
      company: intl.formatMessage({id: 'konfidio'}),
      title: intl.formatMessage({id: 'konfidio_title'}),
      body: [intl.formatMessage({ id: 'konfidio_desc' })],
      bgColor: "#4d2875",
      imageSrc: '/images/Konfidio.png',
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
      padding: 20
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
