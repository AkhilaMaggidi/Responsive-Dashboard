import React from 'react';
import './Widget.css';

const ActivityFeed = ({ activities }) => {
  return (
    <div className="widget">
      <h3>Recent Activity</h3>
      <ul className="activity-feed">
        {activities.map((activity) => (
          <li key={activity.id}>
            <span className="activity-text">{activity.activity}</span>
            <span className="activity-time">{activity.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityFeed;
