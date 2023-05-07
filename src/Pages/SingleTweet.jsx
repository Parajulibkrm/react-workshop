import axios from "axios";
import { useEffect, useState } from "react";
import { SECRETS } from "./Home";
import Tweet from "../components/Tweet";
import { useParams } from "react-router-dom";

const SingleTweet = () => {
  const [tweet, setTweet] = useState(null);
  const { id } = useParams();
  const fetchTweet = async () => {
    const resp = await axios.get(
      `https://react-workshop-todo.fly.dev/posts/${id}`,
      {
        headers: {
          apiKey: SECRETS.apiKey,
        },
      }
    );
    console.log(resp.data);
    setTweet(resp.data.post);
  };
  useEffect(() => {
    fetchTweet();
  }, []);
  return (
    <>
      {tweet ? (
        <Tweet
          avatar={`https://avatars.githubusercontent.com/u/${tweet?.user?.githubId}`}
          content={tweet?.content}
          id={tweet?._id}
          name={tweet?.user.fullname}
          username={tweet?.user.name}
          image={tweet?.image}
        />
      ) : null}
    </>
  );
};

export default SingleTweet;
