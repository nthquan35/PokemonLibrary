import {useState, useEffect} from 'react';


function useFetch(uri) {
  const [data, setData] = useState();
  const [notFound, setNotFound] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    if (!uri) return;
    fetch(uri)
    .then(data => data.json())
    .then(setData)
    .then(() => {
      setNotFound(false)
      setError('')
    })
    .catch((e) => {
      setError(e)
      setNotFound(true)
    })
  }, [uri]);
  return {notFound, data, error};
}

export default useFetch;