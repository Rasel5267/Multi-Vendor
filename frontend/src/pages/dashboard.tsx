import React, { ReactElement } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import { NextPageWithLayout } from './_app';

const Dashboard: NextPageWithLayout = () => {
  return (
    <>
      <h1>Dashboard Page</h1>
      <p>This is the dashboard page.</p>
    </>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashboardLayout>{page}</DashboardLayout>
  )
}

export default Dashboard;

