import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <div className="content">
        <main>
          <h2>Let see where the awesome place</h2>
          <p> - - - - - - - - - - - - - - - - - - - -</p>
          <nav><Link to="/poi">awsome place</Link></nav>
        </main>
        <nav>
          <Link to="/about">About</Link>
        </nav>
        </div>
    </>
  );
}

export default Main;