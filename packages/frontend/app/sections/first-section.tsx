import Image, { StaticImageData } from "next/image";
import profilePic from '../../public/images/profile-2.png';
export default function FirstSection() {
    return (
        <div className={`flex flex-wrap justify-center max-w-screen-xl mx-auto lg:justify-start`}>

            <div className='mt-6 relative basis-1/2 order-last lg:order-first'>
                <h3 className=''>Hi, my name is Fouad.</h3>
                <h1 className=''>I implmenet Fullstack Applications</h1>
                <h3>{`I'm a Senior Software Engineer, with extensive experience in building highly scalable backends and user-friendly frontends`}</h3>
            </div>

            <div className='basis-1/2'>
                <Image
                    className={`relative max-w-xs sm:max-w-xl float-right order-first lg:order-last`}
                    src={profilePic}
                    alt="Picture of author" />
            </div>

        </div>
    )
}