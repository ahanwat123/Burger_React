import React, { Component } from 'react';

import Layout from './components/Layout/Layout';


class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <p> hi i am in layout</p>
        </Layout>
      </div>
    );
  }
}

export default App;
