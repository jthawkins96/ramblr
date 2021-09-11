import ChatLog from 'components/ChatLog/ChatLog';
import Sidebar from 'components/Sidebar/Sidebar';
import TopNav from 'components/TopNav/TopNav';
import './App.scss';

function App() {
    return (
        <div className="root-container">
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
}

export default App;
