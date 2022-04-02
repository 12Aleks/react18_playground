import React, {useState, useTransition, useMemo} from 'react';
import {defaultItems} from './defaultItems'

const UseTransition = () => {
    const [value, setValue] = useState('');
    const [filteredValue, setFilteredValue] = useState('');
    const [items, setItems] = useState(defaultItems);
    const [isPending, startTransition ] = useTransition()


    // old version with only useMemo
    const filterItems = useMemo(() => {
        return items.filter(item => item.title.toLowerCase().includes(filteredValue))
    }, [filteredValue]);

    const onChangeValue = e => {
        setValue(e.target.value);
        startTransition(() => {
            setFilteredValue(e.target.value)
        });
    }

    return (
        <div>
            <input type="text" onChange={e => onChangeValue(e)} value={value}/>
            <div style={{paddingTop: '20px'}}>
                <ul>
                    {isPending && <h3>Loading ...</h3>}
                    {
                      filterItems.map(item =>
                        <li key={item.id}>{item.id}. {item.title}</li>
                      )
                    }
                </ul>
            </div>
        </div>
    );
};

export default UseTransition;