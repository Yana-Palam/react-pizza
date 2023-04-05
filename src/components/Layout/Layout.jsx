import { Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import Header from "../Header";

function Layout() {
  const { state } = useNavigation();
  return (
    <>
      <div className="wrapper">
        <Header />
        <main>
          {state === "loading" && <div role="loader">Loading</div>}
          <div className="content">
            <div className="container">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
export default Layout;
