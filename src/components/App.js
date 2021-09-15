import { lazy, Suspense } from "react";
// import AuthProvider from "../contexts/AuthContext";
// import RoomProvider from "../contexts/RoomContext";
// import NavTop from "./NavTop";

import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Loading from "./Loading";
import routePaths from "./routerPaths";
// import Signup from "./Signup";

const AuthProvider = lazy(() => import("../contexts/AuthContext"));
const RoomProvider = lazy(() => import("../contexts/RoomContext"));
const Login = lazy(() => import("./Login"));
const Signup = lazy(() => import("./Signup"));
// const PrivateRoute = lazy(() => import("./PrivateRoute"));
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
  return (
    <Suspense fallback={<Loading />}>
      <AuthProvider>
        <RoomProvider>
          <Router>
            <NavTop />
            <div
              className=" d-flex align-items-start justify-content-center"
              style={{ minHeight: "100vh" }}
            >
              <div className="w-100">
                <Suspense fallback={<Loading />}>
                  <Switch>
                    <Route exact path={routePaths.home} component={Home} />

                    <Route exact path={routePaths.signup} component={Signup} />
                    <Route exact path={routePaths.login} component={Login} />
                    <Route exact path={routePaths.Room} component={Room} />
                    <Route
                      path={routePaths.resetPassword}
                      component={ResetPassword}
                    />
                  </Switch>
                </Suspense>
              </div>
            </div>
          </Router>
        </RoomProvider>
      </AuthProvider>
    </Suspense>
  );
}

export default App;
