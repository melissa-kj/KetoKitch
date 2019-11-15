import React from 'react';
import NavigationBar from './NavigationBar';
import ListRecipes from './ListRecipes';
import AddRecipe from './AddRecipe';
import Layout from './Layout';

const Dashboard = () => {
  return (
    <div>
      <NavigationBar />
      <div>
        <h1> Dashboard </h1>
        <Layout>
        <ListRecipes />
        <AddRecipe />
        </Layout>
      </div>
    </div>
  );
};
export default Dashboard;
