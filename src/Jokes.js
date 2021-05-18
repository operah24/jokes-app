import React, { useState, useEffect } from "react";
import axios from "axios";

function Jokes() {
  const [seconds, setSeconds] = React.useState(20);
  const [joke, setJoke] = useState({});
  const fetchJokes = async () => {
    try {
      const url = "https://official-joke-api.appspot.com/random_joke";
      const config = {
        headers: {
          Accept: "application/json",
        },
      };
      const { data } = await axios.get(url, config);
      console.log(data);
      setJoke(data);
      setSeconds(20);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchJokes();
  }, []);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => 
        setSeconds(seconds - 1), 1000);
    }
  }, [seconds]);

  useEffect(() => {
    if (seconds === 0) {
      fetchJokes();
    }

  }, [seconds]);

  return (
    <div>
      <h3>Seconds: {seconds}</h3>
      <p>Joke: {joke ? joke.setup : ""}</p>
      <p>punchline: {joke ? joke.punchline : ""}</p>
    </div>
  );
}

export default Jokes;