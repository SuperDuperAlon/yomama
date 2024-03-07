

export function CatalogueSort({ sort, onSetSort }: any) {

    function handleSortChange(by: any) {
        console.log(sort);
        
        const updatedSort = { ...sort, by }
        onSetSort(updatedSort)
    }

    function handleDirectionChange() {
        const updatedSort = { ...sort, asc: !sort.asc }
        onSetSort(updatedSort)
    }

    return <section>
        <button onClick={() => handleSortChange('name')}>By name</button>
        {/* <button onClick={() => handleSortChange('price')}>By price</button> */}
        <button onClick={handleDirectionChange}>Change direction {sort.asc ? '^' : 'v'}</button>
    </section>
}