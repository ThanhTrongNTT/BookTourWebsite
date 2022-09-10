const { useState, useEffect } = require("react");

function useDebounce(initializeValue, delay = 500) {
  const [debounceValue, setDebounceValue] = useState(initializeValue);
  useEffect(() => {
    let timer = setTimeout(() => {
      setDebounceValue(debounceValue);
    }, delay);
    return () => clearTimeout(timer);
  }, [debounceValue, delay]);
  return debounceValue;
}

export default useDebounce