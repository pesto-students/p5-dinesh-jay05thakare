import illus from "../images/illus.png";
function Header() {
  return (
    <div className="header">
      <div className="header-text">
        <h1>More than just shorter Links</h1>
        <p>
          Build your brand recognition and get detailed insights on how your
          links are performing
        </p>
      </div>
      <div className="illus">
        <img src={illus} alt="" />
      </div>
    </div>
  );
}

export default Header;
