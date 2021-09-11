import ChatList from './ChatList/ChatList';
import SidebarHeader from './SidebarHeader/SidebarHeader';
import './Sidebar.scss';

const Sidebar = () => {
    return (
        <div className="sidebar-container no-select">
            <SidebarHeader />
            <ChatList />
        </div>
    );
};

export default Sidebar;
