import "./header.css";
import { Link } from "react-router-dom";
export default function Header({ loged, setLoged }) {
  return (
    <div className="navbar">
      <div>
        <h1>BMW</h1>
      </div>
      <div className="pages">
        <h1>
          <Link to={"./Home"}>Home</Link>
        </h1>
        <h1>
          <Link to={"./Explore"}>Explore</Link>
        </h1>
        <h1>
          <Link to={"./Cars"}>Cars</Link>
        </h1>
        <h1>
          <Link to={"./About"}>About</Link>
        </h1>
        <h1 className="active">
          <Link to={"./Register"}>
            {loged ? <i class="fa-regular fa-user"></i> : "Sign In"}
          </Link>
        </h1>
      </div>
    </div>
  );
}
