import React from 'react';
import './App.css';
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
}

export default App;