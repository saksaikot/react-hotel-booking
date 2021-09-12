import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import AuthProvider from "../contexts/AuthContext";
import PhotoProvider from "../contexts/PhotoContext";
import Signup from "./Signup";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ResetPassword from "./ResetPassword";
import UpdateProfile from "./UpdateProfile";
import NavTop from "./NavTop";
import Gallery from "./Gallery/Gallery";
import routePaths from "./routerPaths";

function App() {
  return (
    <AuthProvider>
      <PhotoProvider>
        <Router>
          <NavTop />
          <Container
            className="d-flex align-items-start justify-content-center"
            style={{ minHeight: "100vh" }}
          >
            <div className="w-100" style={{ maxWidth: "1080px" }}>
              <Switch>
                <Route exact path={routePaths.home} component={Gallery} />
                <Route path={routePaths.signup} component={Signup} />
                <Route path={routePaths.login} component={Login} />
                <Route
                  path={routePaths.resetPassword}
                  component={ResetPassword}
                />
                <Route path={routePaths.gallery} component={Gallery} />
              </Switch>
            </div>
          </Container>
        </Router>
      </PhotoProvider>
    </AuthProvider>
  );
}

export default App;
