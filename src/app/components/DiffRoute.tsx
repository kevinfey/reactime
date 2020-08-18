import React from 'react';
import {
  MemoryRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';
import Diff from './Diff';
import DiffMap from './DiffMap';

interface DiffRouteProps{
  snapshot: Record<string, {
    name?: string;
    componentData?: Record <string, unknown>;
    state?: string | unknown
    stateSnaphot?: Record<string, unknown>;
    children?: unknown[];
  }>;
}

const DiffRoute = (props: DiffRouteProps): unknown => (


  <Router>
    <div className="navbar">
      <NavLink className="router-link" activeClassName="is-active" exact to="/">
        Tree
      </NavLink>
      <NavLink className="router-link" activeClassName="is-active" to="/diffRaw">
        Raw
      </NavLink>
      <NavLink className="router-link" activeClassName="is-active" to="/diffMap">
        Map
      </NavLink>
    </div>
    <Switch>
      <Route path="/diffRaw" render={() => <Diff snapshot={props.snapshot} show />} />
      <Route path="/diffMap" render={() => <DiffMap snapshot ={props.snapshot} />} />
      <Route path="/" render={() => <Diff snapshot={props.snapshot} show={false} />} />

    </Switch>
  </Router>
);

export default DiffRoute;
