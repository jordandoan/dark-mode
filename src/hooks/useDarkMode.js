import { useEffect } from 'react';

import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (value) => {
  let [dark, setDark] = useLocalStorage('dark', value);
  
  useEffect(() => {
    let bodyTag = document.querySelector('body');
    if (dark) {
      bodyTag.classList.add("dark-mode");
    } else {
      bodyTag.classList.remove("dark-mode");
    }
  }, [dark]);
  return [dark, setDark];
};