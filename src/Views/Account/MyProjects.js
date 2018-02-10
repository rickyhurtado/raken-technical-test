import React, { Component } from 'react';
import { PageTitle } from '../../Lib/Common/Views';

export default class MyProjects extends Component {
  render() {
    return (
      <div className="page">
        <PageTitle title="My Projects" appName="Account" />
      </div>
    );
  }
};
