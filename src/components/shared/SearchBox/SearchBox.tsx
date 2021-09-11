import './SearchBox.scss';

const SearchBox = () => {
    return (
        <div className="search-box-container">
            <i className="fa fa-search"></i>
            <input className="form-control" placeholder="Search" results={1} />
        </div>
    );
};

export default SearchBox;
