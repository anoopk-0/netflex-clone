import { Switch, BrowserRouter, Route } from "react-router-dom";
import * as ROUTES from "./contants/routes";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routers";
import { useAuthListiner } from "./hooks";
import { Browse, Home, SignIn, SignUp } from "./pages";

function App() {
  const { user } = useAuthListiner();
  return (
    <BrowserRouter>
      <Switch>
        {/* another way to do routing */}
        {/* <Route exact path={ROUTES.SIGN_IN} component={SignIn} /> */}

        {/* new custom router */}
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
        >
          <SignIn />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
        >
          <SignUp />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
        >
          <Home />
        </IsUserRedirect>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
