import { Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import Header from "../Header";

function Layout({ searchValue, setSearchValue }) {
  const { state } = useNavigation();
  return (
    <>
      <div className="wrapper">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <main>
          {state === "loading" && <div role="loader">Loading</div>}
          <div className="content">
            <div className="container">
              {/* <Suspense fallback={<p>loading...</p>}> */}
              <Outlet />
              {/* </Suspense> */}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
export default Layout;
