import BrutalDiv from "../components/brutal-div"
import DevIcon from "../components/dev-icon"
import {useIntl} from "react-intl";
export default function SkillsSection() {
    const intl = useIntl();
    const codingSkills = [
        'Node.js',
        'TypeScript',
        'MySql',
        'PostgreSQL',
        'Nest.js',
        'Redis',
        'MongoDB',
        'React',
        'Next.js',
        'Tailwind css',
        'Solidity',
        'yarn'
    ];

    const devOpsSkills = [
        'Amazon Web Services',
        'Google Cloud',
        'Kubernetes',
        'Docker',
        'GitHub',
        'GitLab',
        'Linux',
        'Bash'
    ];
    const managementSkills = [
        'JIRA',
        'Confluence',
        'Figma',
        'Slack',
        'Trello'
    ];

    return (


        <div className={`grid grid-cols-1 gap-y-10 lg:grid-cols-3 sm:gap-x-16 pr-5 pl-5 text-center`}>
            <BrutalDiv title={intl.formatMessage({id: 'coding'})} icon='🕸' className='  bg-teal-50'>
                {
                    codingSkills.map((val, i) => {
                        return <DevIcon key={`coding${i}`} label={val} icon={val} />
                    })
                }
            </BrutalDiv>

            <BrutalDiv icon='⚙️' title={intl.formatMessage({id: 'devops'})} className='bg-purple-100'>
                {
                    devOpsSkills.map((val, i) => {
                        return <DevIcon key={`devops${i}`} label={val} icon={val} />
                    })
                }
            </BrutalDiv>

            <BrutalDiv icon='👨🏻‍💻' title={intl.formatMessage({id: 'management'})} className=' bg-lime-100'>
                {
                    managementSkills.map((val, i) => {
                        return <DevIcon key={`mgmt${i}`} label={val} icon={val} />
                    })
                }
            </BrutalDiv>

        </div>

    )
}