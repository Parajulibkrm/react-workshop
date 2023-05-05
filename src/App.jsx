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
          <div className="tweet-header">
            <h3 className="username">John Doe</h3>
            <span className="handle">@johndoe</span>
            <span className="timestamp">- 5h</span>
          </div>
          <p className="tweet-text">This is a sample tweet!</p>
          <img
            className="tweet-image"
            src="https://placekitten.com/200/150"
            alt="Tweet Image"
          />
          <div className="tweet-footer">
            <button className="btn-reply">Reply</button>
            <button className="btn-retweet">Retweet</button>
            <button className="btn-like">Like</button>
            <button className="btn-share">Share</button>
          </div>
        </div>
      </div>
      <h1> Hello world</h1>
    </>
  );
};

export default App;
