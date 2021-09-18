import {useState, useEffect} from 'react';


function useFetch(uri) {
  const [data, setData] = useState();
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    if (!uri) return;
    fetch(uri)
    .then(data => data.json())
    .then(setData)
    .then(() => setNotFound(false))
    .catch(setError)
  }, [uri]);
  return {notFound, data, error};
}

export default useFetch;