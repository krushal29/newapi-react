import "./App.css";
import { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <News key="general1" pagesize={5} car="tesla" category="general" />
            </Route>
            <Route exact path="/business">
              <News key="business" pagesize={5} car="tesla" category="business" />
            </Route>exact 
            <Route exact path="/entertainment">
              <News key="entertainment" pagesize={5} car="tesla" category="entertainment" />
            </Route>
            <Route exact path="/general">
              <News key="general" pagesize={5} car="tesla" category="general" />
            </Route>
            <Route exact path="/health">
              <News key="health" pagesize={5} car="tesla" category="health" />
            </Route>
            <Route exact path="/science">
              <News key="science" pagesize={5} car="tesla" category="science" />
            </Route>
            <Route exact path="/sports">
              <News key="sports" pagesize={5} car="tesla" category="sports" />
            </Route>
            <Route exact path="/technology">
              <News key="technology" pagesize={5} car="tesla" category="technology" />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
