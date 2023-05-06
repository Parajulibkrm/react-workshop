const TweetBody = ({ content, image }) => {
  return (
    <>
      <p className="tweet-text">{content}</p>
      <img src={image} alt="Tweet Image" height={300} width={400} />
    </>
  );
};

export default TweetBody;
