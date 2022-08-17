import {Link} from "react-router-dom";

function Main() {
    return (
      <>
        <main>
          <h2>Let see where the awesome place</h2>
          <p>kaohsiung, kaohsiung, kaohsiung, kaohsiung, kaohsiung, </p>
        </main>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </>
    );
}

export default Main;