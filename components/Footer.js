import Image from 'next/image'

const Footer = () => (
    <>
        <div style={{height:189}} className="object-position: bottom"></div>
        <div className="text-center bg-primaryRed object-position: bottom">
        <Image src="/linkedin.png" width={32} height={32} />
        {" "}
        <Image src="/telegram.png" width={32} height={32} />
        </div>
    </>
);

export default Footer