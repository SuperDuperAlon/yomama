

export function CatalogueSort({ sort, onSetSort }: any) {

    function handleSortChange(by: string) {
        const updatedSort = { ...sort, by, asc: !sort.asc }
        onSetSort(updatedSort)
    }


    return <section>
        <button onClick={() => handleSortChange('name')}>By name {sort.asc ? '^' : 'v'}</button>
        <button onClick={() => handleSortChange('price')}>By price {sort.asc ? '^' : 'v'}</button>
    </section>
}