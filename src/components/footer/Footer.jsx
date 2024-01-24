import "./footer.css";

function Footer() {
  return (
    <div className="footer d-flex justify-content-between align-items-center  my-3 ">
      <div>
        <ul className="d-flex">
          <li>
            <a href="#header">Home</a>
          </li>
          <li>
            <a href="#main">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <p className="pe-3">&copy; 2024 Haytham Ali. All rights reserved.</p>
    </div>
  );
}

export default Footer;
