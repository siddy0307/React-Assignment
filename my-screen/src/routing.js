import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";

class Routing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false
    };
  }
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/Login">
                Login Screen
              </Link>
            </li>
            <li>
              <Link to="/search">Search Screen</Link>
            </li>
            {/* {this.state.authenticated ? (
              <li>
                <Link to="/search">Search Screen</Link>
              </li>
            ) : null} */}
          </ul>

          <hr />

          <Route
            exact
            path="/Login"
            auth={this.state.authenticated}
            component={Screen1}
          />
          <Route path="/search" component={Screen2} />
        </div>
      </Router>
    );
  }
}

export default Routing;
