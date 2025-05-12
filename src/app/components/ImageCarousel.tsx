import Image from 'next/image';

export default function ImageCarousel() {
    return (
        <div className='image-carousel'>
            <Image
                src='/imgs/sofi.svg'
                width={272}
                height={73}
                alt='Sofi Logo'
            />
            <Image
                src='/imgs/ups.svg'
                width={144}
                height={169}
                alt='UPS Logo'
            />
            <Image
                src='/imgs/marriott.svg'
                width={232}
                height={207}
                alt='Marriott Logo'
            />
            <Image
                src='/imgs/norwegian.svg'
                width={365}
                height={145}
                alt='Norwegian Cruise Line Logo'
            />
            <Image
                src='/imgs/aa.svg'
                width={345}
                height={133}
                alt='American Airlines Logo'
            />
            <Image
                src='/imgs/studiokohler.svg'
                width={480}
                height={59}
                alt='Studio Kohler Logo'
            />
        </div>
    );
}
