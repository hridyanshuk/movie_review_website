import {Icon, IconButton} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

function Searchbar() {
    return (
        <div className="header_searchbar">
            <input id = 'header_search'/>
            <IconButton>
                <SearchIcon />
            </IconButton>
        </div>
    )
}

export default Searchbar