import Image from 'next/image'

const Footer = () => (
    <>
        <div style={{height:189}} className="object-position: bottom"></div>
        <div className="text-center bg-primaryRed object-position: bottom">
        <a href="https://www.linkedin.com/in/gaura-putu/"><Image src="/linkedin.png" width={32} height={32} /></a>
        {" "}
        <a href="https://t.me/gauraputu"><Image src="/telegram.png" width={32} height={32} /></a>
        </div>
    </>
);

export default Footer