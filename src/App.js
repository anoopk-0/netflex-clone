import { Switch, BrowserRouter, Route } from "react-router-dom";
import * as ROUTES from "./contants/routes";
import { Browse, Home, SignIn, SignUp } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* another way to do routing */}
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
        <Route exact path={ROUTES.BROWSE} component={Browse} />
        <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
        <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
