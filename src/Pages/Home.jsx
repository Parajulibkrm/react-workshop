import { useEffect, useState } from "react";
import Tweet from "../components/Tweet";
import axios from "axios";
import CreateTweet from "../components/CreateTweet";

export const SECRETS = {
  apiKey: "645659e37213f63d43f32002",
};
const Home = () => {
  const [tweets, setTweets] = useState([]);
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const fetchTweets = async () => {
    const posts = await axios.get(
      "https://react-workshop-todo.fly.dev/posts/all?limit=50",
      {
        headers: {
          apiKey: SECRETS.apiKey,
        },
      }
    );
    console.log(posts.data);
    setTweets(posts.data);
  };
  useEffect(() => {
    fetchTweets();
  }, [shouldRefresh]);
  return (
    <>
      <CreateTweet setShouldRefresh={setShouldRefresh} />
      {tweets.map((tweet) => {
        return (
          <Tweet
            name={tweet.user.fullname}
            username={tweet.user.name}
            id={tweet._id}
            key={tweet._id}
            avatar={`https://avatars.githubusercontent.com/u/${tweet.user.githubId}`}
            content={tweet.content}
            image={tweet.image}
          />
        );
      })}
    </>
  );
};

export default Home;
