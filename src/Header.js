import Nav from "./Nav";
const Header = () => {
  return (
    <div className="header">
      <img
        src="logo.png"
        alt="Logo Little Lemon"
        width={280}
        height={112}
      ></img>
      <Nav />
    </div>
  );
};
export default Header;
