import { Link } from "react-router-dom";

function Dismatch() {
  return (
    <>
      <div className="content">
        <main>
          <h2>您的網址打錯囉</h2>
          <p> 404 not found. </p>
          <nav>
          <Link to="/">Home</Link>
        </nav>
        </main>
        
      </div>
    </>
  );
}

export default Dismatch;