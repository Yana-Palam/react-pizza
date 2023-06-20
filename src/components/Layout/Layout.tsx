import { Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import Header from "../Header";
import Loader from "../Loader/Loader";

const Layout: React.FC = () => {
  const { state } = useNavigation();
  return (
    <>
      <div className="wrapper">
        <Header />
        <main>
          {state === "loading" && (
            <div>
              <Loader />
            </div>
          )}
          <div className="content">
            <div className="container">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default Layout;
