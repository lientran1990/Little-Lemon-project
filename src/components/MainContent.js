import { Link } from "react-router-dom";

const MainContent = () => {
  return (
    <div className="container-main">
      <span>
        <h1>Little Lemon</h1>
        <sub>Chicago</sub>
        <p>
          We are a family owned
          <br />
          Mediterranean restaurant,
          <br />
          focused on traditional recipes <br />
          served with a modern twist.{" "}
        </p>
        <Link to="/reservation">
          <button aria-label="On Click">Reserve Table</button>
        </Link>
      </span>
      <img
        className="img-main"
        src="restauranfood.jpg"
        alt="banner"
        width={390}
        height={428}
      ></img>
    </div>
  );
};

export default MainContent;
