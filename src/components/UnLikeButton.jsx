const LikeButton = ({ toggle }) => {
  return (
    <button className="btn-like" onClick={toggle}>
      Unlike
    </button>
  );
};

export default LikeButton;
