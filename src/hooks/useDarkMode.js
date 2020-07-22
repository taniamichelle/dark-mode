import React, { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

function useDarkMode() {
    //called useLocalStorage and passed in a key which we named in a destructured array
    const [darkModeState, setDarkMode] = useLocalStorage('dark-mode');
    useEffect(() => {
        darkModeState ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
    }, [darkModeState])
    return [darkModeState, setDarkMode];
}

export default useDarkMode;
