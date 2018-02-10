import React, { Component } from 'react';
import { PageTitle } from '../../Lib/Common/Views';

export default class MyProfile extends Component {
  render() {
    return (
      <div className="page">
        <PageTitle title="My Profile" appName="Account" />
      </div>
    );
  }
};
