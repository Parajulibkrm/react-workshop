import { useState } from "react";
import "./createTweet.css";
import axios from "axios";
import { SECRETS } from "../Pages/Home";
const CreateTweet = ({ setShouldRefresh }) => {
  const [tweetContent, setTweetContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const upload = async () => {
    try {
      await axios.post(
        "https://react-workshop-todo.fly.dev/posts/",
        {
          content: tweetContent,
          image: imageUrl,
        },
        {
          headers: {
            apiKey: SECRETS.apiKey,
          },
        }
      );
      setTweetContent("");
      setImageUrl("");
      setShouldRefresh((v) => !v);
    } catch (e) {
      console.log(e);
      alert("Error uploading tweet");
    }
  };
  const handleSubmit = () => {
    upload();
  };
  return (
    <div className="tweet-create">
      <textarea
        id="tweet-text"
        placeholder="What's happening?"
        required
        value={tweetContent}
        onChange={(e) => setTweetContent(e.target.value)}
      ></textarea>
      <input
        type="text"
        placeholder="Enter image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <div className="tweet-controls">
        <span id="char-count">280</span>
        <button id="tweet-btn" onClick={handleSubmit}>
          Tweet
        </button>
      </div>
    </div>
  );
};

export default CreateTweet;
