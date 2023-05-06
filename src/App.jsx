import { useEffect, useState } from "react";
import "./App.css";
import Tweet from "./components/Tweet";
import axios from "axios";
import Navbar from "./components/Navbar";
import CreateTweet from "./components/CreateTweet";

const App = () => {
  const [tweets, setTweets] = useState([]);
  const fetchTweets = async () => {
    const posts = await axios.get("https://react-workshop.fly.dev/");
    setTweets(posts.data);
  };
  useEffect(() => {
    fetchTweets();
  }, []);
  return (
    <>
      <Navbar />
      <CreateTweet />
      {tweets.map((tweet) => {
        return (
          <Tweet
            name={tweet.authorname}
            username={tweet.authorname}
            key={tweet.authorname}
            avatar={tweet.avatar}
            content={tweet.content}
            image={tweet.image}
          />
        );
      })}
    </>
  );
};

export default App;
