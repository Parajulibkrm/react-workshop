import Header from "./Header";
import TweetBody from "./TweetBody";
import Footer from "./Footer";

const Tweet = () => {
  return (
    <div className="tweet">
      <img
        src="https://placekitten.com/50/50"
        alt="Profile Picture"
        height={50}
        width={50}
      />
      <div className="tweet-content">
        <Header />
        <TweetBody />
        <Footer />
      </div>
    </div>
  );
};

export default Tweet;
