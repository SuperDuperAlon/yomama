'use client'

import { useEffect, useRef, useState } from 'react'
import { icons } from '@/styles/assets/icons/icons'
import { flowerService } from '@/services/flower.service'
import { appService } from '@/storage/appwrite'

const HeaderFilter = ({ onSetFilter }: any) => {
    const [filterByToEdit, setFilterByToEdit] = useState(
        appService.getDefaultFilter()
    );

    console.log(filterByToEdit);
    
    const elInputRef = useRef<HTMLInputElement>(null);;

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
        </>
    )
}

export default HeaderFilter