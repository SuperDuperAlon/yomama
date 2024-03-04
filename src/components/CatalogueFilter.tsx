import { appService } from '@/storage/appwrite';
import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'

// interface FilterProps {
//   onFilterChange: (filterOption: any) => void;
// }

const CatalogueFilter = ({ onSetFilter }: any) => {

  const [filterByToEdit, setFilterByToEdit] = useState(
    appService.getDefaultFilter()
  );
  const elInputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    elInputRef.current?.focus();
  }, []);

  useEffect(() => {
    onSetFilter(filterByToEdit);
  }, [filterByToEdit]);

  function handleChange({ target }: any) {
    let { value, name: field, type } = target;
    value = type === "number" ? +value : value;
    console.log(typeof value);
    setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }));
  }

  function onSubmitFilter(ev: FormEvent<HTMLFormElement>) {
    // update father cmp that filters change on submit
    ev.preventDefault();
    onSetFilter(filterByToEdit);
  }

  return (
    <section>

      <div className="flower-list-filter">
        <form onSubmit={onSubmitFilter}>
          <label htmlFor='name'>Name:</label>
          <input
            type="text"
            id='name'
            name='name'
            placeholder='by Name'
            onChange={handleChange}
            ref={elInputRef}
          />
          <input
            type="number"
            id='price'
            name='price'
            placeholder='by price'
            onChange={handleChange}
            ref={elInputRef}
          />
          {/* <label>
        Price:
        <input type="number"
        value={priceFilter}
        onChange={handlePriceChange}
        />
      </label> */}
        </form>
      </div>
    </section >
  )
}

export default CatalogueFilter