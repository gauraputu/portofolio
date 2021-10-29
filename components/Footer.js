import Image from 'next/image'

const Footer = () => (
    <>
        <div class="text-center bg-primaryRed object-position: bottom">
        <Image src="/linkedin.png" width={32} height={32} />
        {/* <div style={{width:"45px"}}></div> */} {" "}
        <Image src="/telegram.png" width={32} height={32} />
        </div>
    </>
);

export default Footer