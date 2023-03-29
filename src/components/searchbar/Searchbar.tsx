import "./Searchbar.css";
import SearchIcon from '@material-ui/icons/Search';

function Searchbar(){
    return <div className="searchbar">

        <label htmlFor="searchbar">
        <SearchIcon/>

        </label>
        <input type="search" id="searchbar" placeholder="Search Redditclone" />

    </div>;
}

export default Searchbar;