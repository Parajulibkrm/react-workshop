import { useState } from "react";

const Footer = () => {
  const [count, setCount] = useState(0);
  const toggle = () => {
    setCount(10);
    setCount(10);
    // setCount(count + 1);
  };

  return (
    <div className="tweet-footer">
      <button className="btn-reply">Reply</button>
      <button className="btn-retweet">Retweet</button>
      <button className="btn-like" onClick={toggle}>
        {count} Like
      </button>
      <button className="btn-share">Share</button>
    </div>
  );
};

export default Footer;
