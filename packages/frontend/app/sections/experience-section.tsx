import DevIcon from "../components/dev-icon";
import Image from "next/image";

interface WrapperProps {
    reverse?: boolean;
    company: string;
    title: string;
    body: any;
    imageSrc: string;
    skills?: Array<string>;
}
export default function ExperienceSection(props: WrapperProps) {
    return (
        <div className={`grid grid-cols-1 lg:grid-cols-2`}>
            <div className={`order-first bg-white w-auto relative flex ${props.reverse && 'lg:order-last'}`}>
                <div className={`m-auto max-w-3xl p-5`}>
                    <h2 className="mt-10">{props.title}</h2>
                    <h3 className="mb-10">{props.company}</h3>
                    <div>
                        {props.body}
                    </div>
                    {
                        props.skills?.map((val, i) => {
                            return <DevIcon key={i} label={val} icon={val} />
                        })
                    }
                </div>
            </div>

            <div className={`${props.reverse && 'sm:order-first'}`}>
                <Image src={props.imageSrc}
                    width={500}
                    height={500}
                    loading="lazy"
                    quality={40}
                    className=''
                    style={{
                        width: '100%',
                        objectFit: 'cover',
                        height: '100%'

                    }}
                    alt="Car" />
            </div>
        </div>
    )
}
