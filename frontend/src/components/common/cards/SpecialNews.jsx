import test from '../../../assets/test1.webp'
const SpecialNews = () => {
    return (
        <div className="col-span-2 relative">
            <div className='w-full h-full absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-b from-transparent to-black rounded'></div>
            <img src={test} alt="news image" className='rounded w-full max-h-[350px] object-cover'/>
            <h2 className='absolute bottom-3 left-3 text-white font-semibold text-2xl'>Lorem ipsum dolor sit amet.</h2>
        </div>
    );
};

export default SpecialNews;