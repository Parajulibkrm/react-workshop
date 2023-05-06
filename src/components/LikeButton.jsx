import { useEffect } from "react";

const LikeButton = ({ toggle }) => {
  useEffect(() => {
    return () => {
      console.log("Like component unmounted");
    };
  }, []);

  return (
    <button className="btn-like" onClick={toggle}>
      Like
    </button>
  );
};

export default LikeButton;
