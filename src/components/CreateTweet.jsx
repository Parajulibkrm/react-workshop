import { useState } from "react";
import "./createTweet.css";
const CreateTweet = () => {
  const [tweetContent, setTweetContent] = useState("");
  return (
    <div className="tweet-create">
      <textarea
        id="tweet-text"
        placeholder="What's happening?"
        required
        value={tweetContent}
        onChange={(e) => setTweetContent(e.target.value)}
      ></textarea>
      <div className="tweet-controls">
        <span id="char-count">280</span>
        <button id="tweet-btn">Tweet</button>
      </div>
    </div>
  );
};

export default CreateTweet;
