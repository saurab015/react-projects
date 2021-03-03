import React from "react";

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=526e29c6`;

const useFetch = (urlParams) => {
  const [isLoading, setisLoading] = React.useState(true);
  const [error, setError] = React.useState({ show: false, msg: "" });
  const [data, setData] = React.useState(null);

  console.log(urlParams);
  console.log(API_ENDPOINT);
  const fetchMovies = async (url) => {
    setisLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === "True") {
        setData(data.Search || data);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.Error });
      }
      setisLoading(false);
    } catch (err) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${urlParams}`);
    // eslint-disable-next-line
  }, [urlParams]);

  return { isLoading, error, data };
};

export default useFetch;
