import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Landing = () => <h2> LANDING </h2>
const Dashboard = () => <h2> DASHBOARD </h2>

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
        </div>
      </BrowserRouter>
    </div>
  )
};

export default App;