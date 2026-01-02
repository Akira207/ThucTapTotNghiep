import Header from './Header';
import Bottom from './Bottom';

function DefaultLayout({children}) {
    return ( 
        <div className='grid wide'>
            <Header />
             <div className="content">
                {children}
             </div>
            <Bottom />
        </div>
     );
}

export default DefaultLayout;