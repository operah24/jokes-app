import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Jokes() {
  const [joke, setJoke]  = useState({});
  const fetchJokes = async () => {
    try {
      const url = 'https://official-joke-api.appspot.com/random_joke';
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
  useEffect(() => {
  const timer = setInterval(() => {
    fetchJokes();
  }, 20000);
  return () => clearInterval(timer);
}, []);
 
  return (
    <div>
      <p>Joke: {joke? joke.setup : ''}</p>
      <p>punchline: {joke? joke.punchline : ''}</p>
      
    </div>
  );
}

export default Jokes;
