import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

const NavigationLayout = ({children}) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer/>
        </>
    );
};

export default NavigationLayout;