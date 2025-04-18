import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/actions';
import LineChartWidget from './widgets/LineChartWidget';
import BarChartWidget from './widgets/BarChartWidget';
import PieChartWidget from './widgets/PieChartWidget';
import ActivityFeed from './widgets/ActivityFeed';
import './Dashboard.css';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { userActivity, salesData, userDemographics, recentActivity, loading, error } = useSelector(
    (state) => state.data
  );

  useEffect(() => {
    dispatch(fetchData());
    const interval = setInterval(() => {
      dispatch(fetchData());
    }, 60000); // refresh data every 60 seconds

    return () => clearInterval(interval);
  }, [dispatch]);

  if (loading) return <div>Loading data...</div>;
  if (error) return <div>Error loading data: {error}</div>;

  return (
    <div className="dashboard-grid">
      <LineChartWidget data={userActivity} />
      <BarChartWidget data={salesData} />
      <PieChartWidget data={userDemographics} />
      <ActivityFeed activities={recentActivity} />
    </div>
  );
};

export default Dashboard;
