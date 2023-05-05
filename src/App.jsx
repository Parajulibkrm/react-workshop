import Footer from "./components/Footer";
import Header from "./components/Header";
import TweetBody from "./components/TweetBody";
import "./App.css";
const App = () => {
  return (
    <>
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
      <h1> Hello world</h1>
    </>
  );
};

export default App;
