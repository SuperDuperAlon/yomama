'use client'

import { useEffect, useRef, useState } from 'react'
import { icons } from '@/styles/assets/icons/icons'
import { appService } from '@/storage/appwrite'

const HeaderFilter = () => {

    const [filterBy, setFilterBy] = useState(appService.getDefaultFilter());

    function onSetFilter(filterBy: any) {
        setFilterBy(filterBy);
    }

    const [filterByToEdit, setFilterByToEdit] = useState(
        appService.getDefaultFilter()
    );

    const elInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        elInputRef.current?.focus();
        onSetFilter(filterByToEdit)
    }, []);

    useEffect(() => {
        onSetFilter(filterByToEdit);
    }, [filterByToEdit]);

    function handleChange({ target }: any) {
        let { value, name: field, type } = target;
        value = type === "number" ? +value : value;
        setFilterByToEdit((prevFilter) => {
            return {
                ...prevFilter,
                [field]: value,
            };
        }
        )

    }

    return (
        <>
            <div className='main-input'>
                {icons.magnifyingGlassIcon}
                <input
                    type="text"
                    name='name'
                    id='flowerName'
                    className=''
                    placeholder='Search'
                    onChange={handleChange}
                    value={filterByToEdit.name}
                    ref={elInputRef}
                />
            </div>
        </>
    )
}

export default HeaderFilter