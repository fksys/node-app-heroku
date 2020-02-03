import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import * as actions from '../actions';

const Landing = () => <h2> LANDING </h2>;
const Dashboard = () => <h2> DASHBOARD </h2>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // const { fetchUser } = this.props;
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(actions.fetchUser())
});

export default connect(null, mapDispatchToProps)(App);
