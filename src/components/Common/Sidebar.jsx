import './sidebar.css'
import { sidebardata } from '../../data/sidebar_data'


const Sidebar = ({handleSiderbarClick}) => {
  return (
    <div className="sidebar_container pt-4" >
      <nav className="nav flex-column">
        {sidebardata.map((item) => {
          return (
            <div className="nav-link sidebar-option" key={item.id} id={item.label} onClick={() => handleSiderbarClick(item.label)}>
                {item.icon}
                {item.label}
            </div>
          )
        })}
      </nav>
    </div>
  )
}

export default Sidebar
