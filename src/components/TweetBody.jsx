import { useNavigate } from "react-router-dom";

const TweetBody = ({ content, image, id }) => {
  const navigate = useNavigate();
  const navigateToTweet = () => {
    navigate(`/tweet/${id}`);
  };
  return (
    <div onClick={navigateToTweet}>
      <p className="tweet-text">{content}</p>
      <img src={image} alt="Tweet Image" height={300} width={400} />
    </div>
  );
};

export default TweetBody;
