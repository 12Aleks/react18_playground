import React, {useState, useDeferredValue, useMemo} from 'react';
import {defaultItems} from './defaultItems'

const UseDeferredValue = () => {
    const [value, setValue] = useState('');
    const [items, setItems] = useState(defaultItems);
    const deferredValue = useDeferredValue(value);


    // old version with only useMemo
    const filterItems = useMemo(() => {
        return items.filter(item => item.title.toLowerCase().includes(deferredValue))
    }, [deferredValue]);

    const onChangeValue = e => {
        setValue(e.target.value);
    }

    return (
        <div>
            <input type="text" onChange={e => onChangeValue(e)} value={value}/>
            <div style={{paddingTop: '20px'}}>
                <ul>
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

export default UseDeferredValue;