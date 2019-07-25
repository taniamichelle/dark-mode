import React from 'react';

function useLocalStorage(key, initialValue) {
        //made a state property called StoredValue that takes a fxn as its initial value
    const [storedValue, setStoredValue] = useState(() => {
            //checked to see if the item passed in already exists in local storage and return that value. If it didn't, returned initial value
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item): initialValue
    })
        //added a setter fxn called `setValue` that takes a `value` parameter
    const setValue = (value) => {
            //set the `value` to localStorage using the `key` we passed into our hook
        window.localStorage.setItem(key) JSON.stringify(value))
            //updated the state of `storedValue` with `value` and saved it to local storage.
        setStoredValue(value);
    }
        //return storedValue and setValue from our hook as an array
    return [storedValue, setValue];
}
export default useLocalStorage;