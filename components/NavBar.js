import Image from 'next/image'

const NavBar = () => (
    <>
        <div className="flex h-screen">
            <div className="m-auto z-10">
                <div className="text-9xl">Hello</div>
                <div className="bg-white text-center">I'm Gaura, a fullstack developer</div>
            </div>

            <div className="z-0">
                <Image src="/front-background.svg" layout='fill' />
            </div>
        </div>
    </>
);

export default NavBar