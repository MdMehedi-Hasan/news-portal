import image from '../../../assets/test2.jpg'
const RegularNews = () => {
    return (
        <div className="flex items-start gap-2 border rounded overflow-hidden">
            <img src={image} alt="" className='w-24 h-full'/>
            <h2 className='p-2'>Lorem ipsum dolor sit amet consectetur</h2>
        </div>
    );
};

export default RegularNews;