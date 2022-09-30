const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='pa2'>
            <input className='pa3 ba b--blue bg-light-blue' type='search' placeholder='search dex' onChange={searchChange} />
        </div>
    );
}

export default SearchBox;