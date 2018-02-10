import React, { Component } from 'react';
import { PageTitle } from '../../Lib/Common/Views';

export default class Tasks extends Component {
  render() {
    return (
      <div className="page">
        <PageTitle title="Tasks" appName="Account" />
      </div>
    );
  }
};
