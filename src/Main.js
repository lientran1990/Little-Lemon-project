const Main = () => {
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
        <button className="button" type="button">
          Reserve a Table
        </button>
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

export default Main;
