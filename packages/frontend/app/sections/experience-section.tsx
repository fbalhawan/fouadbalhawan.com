import DevIcon from "../components/dev-icon";
import {  client } from 'lib/sanity/client';
import {  Experience } from '@fouadbalhawan.com/schemas';
import { urlForImage } from "lib/sanity/image";
import { PortableText } from "lib/sanity/plugins/serializer";
import Image from "next/image";
import imageUrlBuilder from '@sanity/image-url';

export default function ExperienceSection(props: Experience) {
    function urlFor(source: string) {
        if (client) {
          return imageUrlBuilder(client).image(source);
        } else {
          return imageUrlBuilder();
        }
      }

    const ptComponents = {
        types: {
          image: ({ value }: any) => {
            if (!value?.asset?._ref) {
              return null;
            }
            if (typeof urlFor !== 'undefined' && value) {
              const src = urlFor(value).fit('max').auto('format');
              return (
                <img alt={value.alt || ' '} loading="lazy" src={src.toString()} />
              );
            }
          },
          code: ({ value }: any) => {
            console.log("value: ",value);
            return (
            <pre data-language={value.language} className=' p-5 bg-slate-300 rounded-xl'>
              <code>{value.code}</code>
            </pre>
            );
          },
        },
      };
    return (
        <div className={`grid grid-cols-1 lg:grid-cols-2`}>
            <div className={`order-first bg-white w-auto relative flex ${props.reverse && 'lg:order-last'}`}>
                <div className={`m-auto max-w-3xl p-5`}>
                    <h2 className="mt-10">{props.title}</h2>
                    <h3 className="mb-10">{props.company}</h3>
                    <div>
                    {props.body && (
                      <PortableText value={props.body} components={ptComponents} />
                      )}
                    </div>
                    {
                        props.skills?.map((val, i) => {
                            return <DevIcon key={i} label={val} icon={val} />
                        })
                    }
                </div>
            </div>
            
            <div className={`${props.reverse && 'sm:order-first'}`} style={{backgroundColor: props.bgColor, padding: `${props.padding}px`}} >
                {urlForImage(props.imageSrc) && 
                    <Image src={ urlForImage(props.imageSrc)?.src as string }
                    width={500}
                    height={500}
                    loading="lazy"
                    quality={40}
                    className=''
                    style={{
                        width: '100%',
                        objectFit: 'cover',
                        height: '100%',
                    }}
                    alt={props.alt ?? "default"} />
                }
            </div>
        </div>
    )
}
