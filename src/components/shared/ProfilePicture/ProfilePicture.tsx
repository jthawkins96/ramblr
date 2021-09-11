import './ProfilePicture.scss';
import testImage from 'test_assets/logo512.png';

const ProfilePicture = () => {
    return (
        <div className="profile-picture-container">
            <img src={testImage} alt="profile" />
            <div className="status-icon-container online">
                <i className="fa fa-check"></i>
            </div>
        </div>
    );
};

export default ProfilePicture;
