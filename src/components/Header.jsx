const Header = ({ name, username }) => {
  return (
    <div className="tweet-header">
      <h3 className="username">{name}</h3>
      <span className="handle">{username}</span>
      <span className="timestamp">- 5h</span>
    </div>
  );
};

export default Header;
