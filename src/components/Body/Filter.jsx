import SearchComponent from "./Search";

const FilterButton = () => {
    return(
        <div className="filter-btn-cmp">
            <button className="fiter-btn" onClick={()=> {
                setRes(!!isFilter)
        console.log('Changed is Filter', isFilter)
        }}> Filter Via Rating </button>
        </div>
    )
}


const FilterSearch = () =>{
    return (<div className="filter-search">
    <SearchComponent/>
    <FilterButton/>
    </div>)
}

export default FilterSearch;