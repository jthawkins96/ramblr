import './TopNav.scss';
import SearchBox from 'components/shared/SearchBox/SearchBox';
import AccountMenu from './AccountMenu/AccountMenu';

const TopNav = () => {
    return (
        <div className="top-nav-container">
            <div className="offset"></div>
            <div className="content-container">
                <div className="search-box-wrapper">
                    <SearchBox />
                </div>
                <AccountMenu />
            </div>
        </div>
    );
};

export default TopNav;
