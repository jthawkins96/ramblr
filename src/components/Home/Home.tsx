import ChatLog from 'components/ChatLog/ChatLog';
import Sidebar from 'components/Sidebar/Sidebar';
import TopNav from 'components/TopNav/TopNav';
import './Home.scss';

const Home = () => {
    return (
        <div className="home-container">
            <div className="top-nav-wrapper">
                <TopNav />
            </div>
            <div className="content-container">
                <div className="sidebar-wrapper">
                    <Sidebar />
                </div>
                <div className="chat-log-wrapper">
                    <ChatLog />
                </div>
            </div>
        </div>
    );
};

export default Home;
