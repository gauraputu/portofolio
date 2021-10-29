const project = () => (
    <>
        <div className="grid grid-cols-2 grid-rows-2 gap-x-4">
            <div className="bg-primaryRed col-start-1 row-span-2 rounded-lg text-white justify-center items-center flex text-5xl">My project</div>
            <div className="col-start-2">
                <div className="text-2xl font-bold" style={{borderBottomWidth: 5,borderBottomColor:'#FF3D5D',width: 150}}>project 1</div>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus iaculis consequat. Pellentesque vulputate eros quis tristique condimentum. Suspendisse nec metus pharetra, tincidunt magna quis, pellentesque dolor.
            </div>
            <div className="col-start-2 row-start-2">
            <div className="text-2xl font-bold " style={{borderBottomWidth: 5,borderBottomColor:'#FF3D5D',width: 150}}>project 2</div>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus iaculis consequat. Pellentesque vulputate eros quis tristique condimentum. Suspendisse nec metus pharetra, tincidunt magna quis, pellentesque dolor. 
            </div>
        </div>
    </>
);
export default project