import 'css/App.css';
import ErrorBoundary from 'components/ErrorBoundary';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from 'components/Routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
  }

  render() {
    var Components = routes.map(r => r[2]);
    return (
      <Router>
        <ErrorBoundary>
          <Switch>
            {Components.map(
              (Comp, i) =>
                i === 0 ? (
                  <Route key={i} exact path={routes[i][0]} component={() => <Comp active={i} />} />
                ) : (
                  <Route key={i} path={routes[i][0]} component={() => <Comp active={i} />} />
                )
            )}
          </Switch>
        </ErrorBoundary>
      </Router>
    );
  }
  componentDidUpdate() {
    var x = document.getElementById('cont');
    var y = document.getElementById('navdiv');
    if (x && y) x.style.marginTop = y.clientHeight + 2 + 'px';
  }
  updateDimensions() {
    var w = window,
      d = document,
      documentElement = d.documentElement,
      body = d.getElementsByTagName('body')[0],
      width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
      height = w.innerHeight || documentElement.clientHeight || body.clientHeight;

    this.setState({ width, height });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }
}

export default App;
