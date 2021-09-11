import ProfilePicture from 'components/shared/ProfilePicture/ProfilePicture';
import './ChatPreview.scss';

const ChatPreview = () => {
    return (
        <div className="chat-preview-container">
            <div className="profile-picture-wrapper">
                <ProfilePicture />
            </div>
            <div className="message-preview-container">
                <div className="message-preview-header-container">
                    <h4 className="no-overflow">Luke White</h4>
                    <span>9/3</span>
                </div>
                <div className="no-overflow">
                    <span>haha well it's an option 😊</span>
                </div>
            </div>
        </div>
    );
};

export default ChatPreview;
