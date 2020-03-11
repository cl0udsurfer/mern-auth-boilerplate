import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Layout
import Layout from './components/layouts/Layout';

// Pages
import App from './App';
import Signup from './pages/auth/Signup';
import Signin from './pages/auth/Signin';
import Activate from './pages/auth/Activate';

class Root extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route path='/' exact component={App} />
            <Route path='/signup' exact component={Signup} />
            <Route path='/signin' exact component={Signin} />
            <Route path='/auth/activate/:token' exact component={Activate} />
          </Layout>
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
