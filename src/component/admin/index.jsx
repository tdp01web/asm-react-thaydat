import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./_component/Header";
import Sidebar from "./_component/Sidebar";
function AdminLayOut() {
  return (
    <>
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row flex">
            <Sidebar />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Outlet />
            </main>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default AdminLayOut;
