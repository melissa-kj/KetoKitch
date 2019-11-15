import React from 'react';
import NavigationBar from './NavigationBar';
import ListRecipes from './ListRecipes';
import AddRecipe from './AddRecipe';

const Dashboard = () => {
  return (
    <div>
      <NavigationBar />
      <div>
        <h1> Dashboard </h1>
        <ListRecipes />
        <AddRecipe />
      </div>
    </div>
  );
};
export default Dashboard;
