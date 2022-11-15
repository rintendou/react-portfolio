import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';
import './layout.scss'

const Layout = () => {
    return (
        <div className='App'>
            <Sidebar />
            
            <div className='page'>
                <Outlet /> {/* Returns all children in the Layout route, check App.js*/}
            </div>
        </div>
    );
}

export default Layout;