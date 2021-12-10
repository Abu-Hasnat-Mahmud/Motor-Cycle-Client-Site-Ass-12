import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import AddPackage from "../AddPackage/AddPackage";
import MakeAdmin from "../MakeAdmin/AddPackage";
import AdminRoute from "../AdminRoute/AdminRoute";
import MakeReview from "../MakeReview/MakeReview";
import ManageAllOrder from "../Order/ManageAllOrder";
import MyOrder from "../Order/MyOrder";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Payment from "../Payment/Payment";
import ManageProduct from "../Manage Product/ManageProduct";

const Dashboard = () => {
  let { path, url } = useRouteMatch();

  const { admin } = useAuth();

  return (
    <div>
      <div className="row">
        <div
          className="col-12 col-md-2 d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
          // style={{ width: "280px" }}
        >
          <ul className="nav nav-pills flex-column mb-auto">
            {admin || (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to={`${url}/MyOrder`}>
                    My Order
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to={`${url}/Payment`}>
                    Payment
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link " to={`${url}/MakeReview`}>
                    Make Review
                  </Link>
                </li>
              </>
            )}
            {admin && (
              <>
                <li className="nav-item">
                  <Link className="nav-link active" to={`${url}/AddPackage`}>
                    Add Package
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to={`${url}/ManageProduct`}>
                    Manage Product
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link " to={`${url}/ManageAllOrder`}>
                    Manage All Order
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to={`${url}/MakeAdmin`}>
                    Make Admin
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="col-12 col-md-10">
          <Switch>
            <PrivateRoute exact path={`${path}/MyOrder`}>
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute exact path={`${path}/MakeReview`}>
              <MakeReview></MakeReview>
            </PrivateRoute>
            <PrivateRoute exact path={`${path}/Payment`}>
              <Payment></Payment>
            </PrivateRoute>

            <AdminRoute exact path={`${path}/AddPackage`}>
              <AddPackage></AddPackage>
            </AdminRoute>
            <AdminRoute exact path={`${path}/ManageProduct`}>
              <ManageProduct></ManageProduct>
            </AdminRoute>

            <AdminRoute exact path={`${path}/MakeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>

            <AdminRoute exact path={`${path}/ManageAllOrder`}>
              <ManageAllOrder></ManageAllOrder>
            </AdminRoute>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
