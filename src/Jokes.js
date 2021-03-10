import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Jokes() {
  const [joke, setJoke] = useState({});
  const fetchJokes = async () => {
    try {
      const url = 'https://icanhazdadjoke.com/';
      const config = {
        headers: {
          Accept: 'application/json',
        },
      };
      const { data } = await axios.get(url, config);
      console.log(data);
      setJoke(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = () => fetchJokes();
  useEffect(() => {
    fetchJokes();
  }, []);
  return (
    <div>
      <p>{joke ? joke.joke : ''}</p>
      <button type="button" onClick={handleClick}>
        View more...
      </button>
    </div>
  );
}

export default Jokes;
