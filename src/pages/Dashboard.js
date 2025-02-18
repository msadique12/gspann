import React, { useContext } from 'react';
import ProductList from '../components/ProductList';
import { AuthContext } from '../context/AuthContext';
import '../styles/dashboard.css';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="dashboard">
      <header>
        <h1>Welcome, {user?.firstName}</h1>
        <button onClick={logout}>Logout</button>
      </header>
      <main>
        <ProductList />
      </main>
    </div>
  );
};

export default Dashboard;
