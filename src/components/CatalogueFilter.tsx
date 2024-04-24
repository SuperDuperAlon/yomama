
import { flowerService } from '@/services/flower.service';
import React, { FormEvent, useEffect, useRef, useState } from 'react'

const CatalogueFilter = ({ onSetFilter }: any) => {

  const [filterByToEdit, setFilterByToEdit] = useState(
    flowerService.getDefaultFilter()
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
    value = type === "range" ? +value : value;
    console.log(value);
    setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }));
  }

  function onSubmitFilter(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    onSetFilter(filterByToEdit);
  }

  return (
    <>
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
    </>
  )
}

export default CatalogueFilter