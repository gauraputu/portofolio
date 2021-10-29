const SendMessage = () => (
    <>
        <div style={{ height: 141 }}></div>
        <div className="grid grid-cols-2">
            <div className="justify-center items-center flex text-5xl">Send me a message!</div>
            <div className="bg-primaryRed rounded-3xl justify-center items-center flex flex-col">
                <div style={{ height: 35 }}></div>
                <input type="text" placeholder="your email here! (optional)" className="bg-white rounded-lg w-2/4 h-12 focus:ring-purple-800 focus:ring-2"></input>
                <div style={{ height: 35 }}></div>
                <textarea className="bg-white rounded-lg w-2/4 h-80 placeholder-gray-400 align-text-top" placeholder="Your message here!"></textarea>
                <div style={{ height: 35 }}></div>
                <button type="button" className="bg-white rounded-lg w-2/4 h-12 transition duration-500 ease-in-out hover:bg-gray-400">Submit</button>
                <div style={{ height: 35 }}></div>
            </div>
        </div>
    </>
);
export default SendMessage