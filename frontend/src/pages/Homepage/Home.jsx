import NavigationLayout from '../../components/layouts/NavigationLayout';
import SpecialNews from '../../components/common/cards/SpecialNews';
import RegularNews from '../../components/common/cards/RegularNews';

const Home = () => {
    const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    const national = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
    // const n = [30]
    return (
        <NavigationLayout>
            <main className='mx-5'>
                <section className='grid grid-cols-4 gap-5 mt-28'>
                    <SpecialNews />
                    <div className='flex flex-col justify-between'>
                        <RegularNews />
                        <RegularNews />
                        <RegularNews />
                        <RegularNews />
                    </div>
                    <aside className=''>
                        <div className='flex'>
                            <button className='w-full bg-black text-white'>All News</button>
                            <button className='w-full bg-slate-300'>Favourite</button>
                        </div>
                        <div className='border border-black max-h-[320px] overflow-auto p-3 flex flex-col gap-3'>
                            {test.map((t, index) => <h3 key={index}>Lorem ipsum dolor, sit amet consectetur adipisicing.</h3>)}
                        </div>
                    </aside>
                </section>
                <section>
                    <h1 className='text-4xl font-semibold my-10 bg-slate-300'>National</h1>
                    <div className='grid grid-cols-4 gap-5' > 
                        {national.map((t, index) => <RegularNews key={ index} />)}
                        </div>
                </section>
                <section className='mb-10'>
                    <h1 className='text-4xl font-semibold my-10 bg-slate-300'>InterNational</h1>
                    <div className='grid grid-cols-4 gap-5' > 
                        {national.map((t, index) => <RegularNews key={ index} />)}
                        </div>
                </section>
            </main>
        </NavigationLayout>
    );
};

export default Home;