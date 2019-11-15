import React from 'react';
import NavigationBar from './NavigationBar';
import ListRecipes from './ListRecipes';

const Dashboard = () => {
  return (
    <div>
      <NavigationBar />
      <div>
        <h1> Dashboard </h1>
        <ListRecipes />
      </div>
    </div>
  );
};
export default Dashboard;
