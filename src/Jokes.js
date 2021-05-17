import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Jokes() {
  const [seconds, setSeconds] = React.useState(20);
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
  React.useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      
    }
  },[seconds]);
  // useEffect(() => {
  //   const timer =
  //     counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
  //   return () => clearInterval(timer);
  // }, [counter]);
  // if (seconds > 0) {
  //     setTimeout(() => setSeconds(seconds - 1), 1000);
  //   } else {
  //     setSeconds('BOOOOM!');
  //   }

  useEffect(() => {
  const timer = setInterval(() => {
    fetchJokes();
  }, 20000);
  return () => clearInterval(timer);
}, []);
 
  return (
    <div>
      <div>Seconds: {seconds}</div>
      <p>Joke: {joke? joke.setup : ''}</p>
      <p>punchline: {joke? joke.punchline : ''}</p>
      
    </div>
  );
}

export default Jokes;
