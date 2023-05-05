import Footer from "./components/Footer";
import Header from "./components/Header";
import TweetBody from "./components/TweetBody";

const App = () => {
  return (
    <>
      <div className="tweet">
        <img
          className="profile-pic"
          src="https://placekitten.com/50/50"
          alt="Profile Picture"
        />
        <div className="tweet-content">
          <Header />
          <TweetBody />
          <Footer />
        </div>
      </div>
      <h1> Hello world</h1>
    </>
  );
};

export default App;
