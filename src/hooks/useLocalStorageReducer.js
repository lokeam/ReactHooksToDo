import { useReducer, useEffect } from 'react';

function useLocalStorageReducer(key, initialValue, reducer) {
  const [state, dispatch] = useReducer( reducer, initialValue, () => {
    let value;
    try {
      value = JSON.parse(
        window.localStorage.getItem(key) || String(initialValue)
      );
    } catch (error) {
      value = initialValue;
    }
    return value;
  }); 
  
  useEffect( () => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, dispatch];
};

export { useLocalStorageReducer };
