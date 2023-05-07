import Header from "./Header";
import TweetBody from "./TweetBody";
import Footer from "./Footer";

const Tweet = ({ name, username, content, image, avatar, id }) => {
  return (
    <div className="tweet">
      <img src={avatar} alt={name} height={50} width={50} />
      <div className="tweet-content">
        <Header name={name} username={username} />
        <TweetBody content={content} image={image} id={id} />
        <Footer />
      </div>
    </div>
  );
};

export default Tweet;
