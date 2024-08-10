import React from 'react';
import Widgets from './Widgets';
import ProfitChart from './ProfitChart';
import ObjectList from './ObjectList';
import { DashboardContainer } from './DashboardStyles';

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Widgets />
      <ProfitChart />
      <ObjectList />
    </DashboardContainer>
  );
};

export default Dashboard;
