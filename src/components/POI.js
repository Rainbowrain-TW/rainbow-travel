import { Link, Outlet } from "react-router-dom";

function POI() {
  return (
    <>
      <div className="content">
        <main>
          <h2>awesome place list</h2>
          <p> - - - - - - - - - - - - - - - - - - - -</p>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default POI;