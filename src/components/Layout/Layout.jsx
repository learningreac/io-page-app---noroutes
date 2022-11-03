import './layout.css'
import Header from '../Common/Header'
import Sidebar from '../Common/Sidebar'
import ProjectContainer from '../Common/ProjectContainer';


const Layout = ({data, handleSiderbarClick}) => {
    return (
        <div className="app">
            <div className='header'>
                <Header />
            </div>

            <div className="main">
                <div className='sidebar'>
                    <Sidebar handleSiderbarClick={handleSiderbarClick}/>
                </div>
                <div className="dashbord-container m-3">
                    <ProjectContainer data={data} />
                </div>
            </div>

        </div>
    )
}

export default Layout