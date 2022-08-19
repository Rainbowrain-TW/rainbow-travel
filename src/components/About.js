import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="content">
        <main>
          <h2>About Us</h2>
          <p>資本額 10 塊，媽媽給我的</p>
          <p>服務專線：0800-000-000</p>
        </main>
          <nav><Link to="/">Home</Link></nav>
      </div>
    </>
  );
}

export default About;