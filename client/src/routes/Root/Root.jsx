import './root.css'
export default () => {
    return (
        <div className="root">
            
            <div className="root_name">
                Movie Review Website
            </div>
            
            <div className="search">
                <input type="text" placeholder='Name of movie/show/series' />
                {/* <button type="submit" href="#"><i className="fa fa-search">Search</i></button> */}
                <button>SEARCH</button>
            </div>
        </div>
    )
}