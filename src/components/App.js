import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import AuthProvider from "../contexts/AuthContext";
import Signup from "./Signup";

import { HashRouter as Router, Route, Switch } from "react-router-dom";
// import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ResetPassword from "./ResetPassword";
import NavTop from "./NavTop";
import routePaths from "./routerPaths";
import Room from "./Room/Room";
import RoomProvider from "../contexts/RoomContext";

function App() {
  // const history = useHistory();
  // let match = useParams();
  // console.log(match, "App.jsx");
  return (
    <AuthProvider>
      <RoomProvider>
        <Router>
          <NavTop />
          <Container
            className="d-flex align-items-start justify-content-center"
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
          </Container>
        </Router>
      </RoomProvider>
    </AuthProvider>
  );
}

export default App;
