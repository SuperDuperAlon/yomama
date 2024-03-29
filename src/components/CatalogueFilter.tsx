import { appService } from '@/storage/appwrite';
import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'

// interface FilterProps {
//   onFilterChange: (filterOption: any) => void;
// }

const CatalogueFilter = ({ onSetFilter, onSetSort }: any) => {

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

  useEffect(() => {
    onSetFilter(filterByToEdit);
  }, [filterByToEdit]);

  function handleChange({ target }: any) {
    let { value, name: field, type } = target;
    value = type === "range" ? +value : value;
    console.log(value);
    setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }));
  }

  function onSubmitFilter(ev: FormEvent<HTMLFormElement>) {
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
          <label htmlFor='price'>Price:</label>
          <input
            type="range"
            id='price'
            name='price'
            min="0"
            max="100"
            step="1"
            placeholder='by price'
            onChange={handleChange}
            ref={elInputRef}
          />
        </form>
      </div>
    </section >
  )
}

export default CatalogueFilter