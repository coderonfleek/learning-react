import React from "react";

//Routing
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

//Components
import Header from "./../components/header";
import Dashboard from "./../components/dashboard";
import Settings from "./../components/settings";
import QueryPage from "./../components/querypage";
import UrlMatchPage from "./../components/urlmatch";
import NotFound from "./../components/notfound";

const AppRouter = () => (
  <BrowserRouter>
    {/*Multiple routes must be contained in a div*/}

    <div>
      {/* Header gets to appear on every page */}
      <Header />
      {/* Switch moves down the route tree till it finds a match, thus the 404page should be the last item in the list */}
      <Switch>
        {/* Add the 'exact' prop to resolve only for exact matches else it matches everthing with a '/' in it */}
        <Route path="/" component={Dashboard} exact={true} />
        <Route path="/settings" component={Settings} />
        <Route path="/querypage" component={QueryPage} />
        <Route path="/match/:id" component={UrlMatchPage} />
        {/* 404 page should not have 'path' so that it will act as a default match */}
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
