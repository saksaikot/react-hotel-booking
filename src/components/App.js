import { lazy, Suspense } from "react";
import AuthProvider from "../contexts/AuthContext";
import RoomProvider from "../contexts/RoomContext";

import { HashRouter as Router, Route, Switch } from "react-router-dom";
import routePaths from "./routerPaths";
// import Signup from "./Signup";

const Login = lazy(() => import("./Login"));
const Signup = lazy(() => import("./Signup"));
const PrivateRoute = lazy(() => import("./PrivateRoute"));
const ResetPassword = lazy(() => import("./ResetPassword"));
const NavTop = lazy(() => import("./NavTop"));
const Room = lazy(() => import("./Room/Room"));

// import Dashboard from "./Dashboard";
// import Login from "./Login"
// import PrivateRoute from "./PrivateRoute";
// import ResetPassword from "./ResetPassword";
// import NavTop from "./NavTop";
// import Room from "./Room/Room";

function App() {
  // const history = useHistory();
  // let match = useParams();
  // console.log(match, "App.jsx");
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthProvider>
        <RoomProvider>
          <Router>
            <NavTop />
            <div
              className="container d-flex align-items-start justify-content-center"
              style={{ minHeight: "100vh" }}
            >
              <div className="w-100" style={{ maxWidth: "1080px" }}>
                <Switch>
                  <Route exact path={routePaths.signup} component={Signup} />
                  <Route exact path={routePaths.login} component={Login} />
                  <Route exact path={routePaths.Room} component={Room} />
                  <Route
                    path={routePaths.resetPassword}
                    component={ResetPassword}
                  />
                  <Route exact path={routePaths.home} component={Room} />
                </Switch>
              </div>
            </div>
          </Router>
        </RoomProvider>
      </AuthProvider>
    </Suspense>
  );
}

export default App;
