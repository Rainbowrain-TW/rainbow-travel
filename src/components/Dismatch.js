import {Link} from "react-router-dom";

function Dismatch() {
    return (
      <>
        <main>
          <h2>您的網址打錯囉</h2>
          <p> 404 not found. </p>
        </main>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </>
    );
}

export default Dismatch;