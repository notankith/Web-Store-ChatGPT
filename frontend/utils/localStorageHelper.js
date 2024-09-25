export const saveToLocalStorage = (key, value) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  };
  
  export const getFromLocalStorage = (key) => {
    if (typeof window !== 'undefined') {
      const storedValue = window.localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : null;
    }
    return null;
  };
  
  export const removeFromLocalStorage = (key) => {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(key);
    }
  };
  