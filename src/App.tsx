import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// @page
import Landing from "Pages/landing/landing";

//------------------------------------------------------------------

const App: React.FC = () => {
  return <RouterManage />;
};

const RouterManage: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
};

export default App;
