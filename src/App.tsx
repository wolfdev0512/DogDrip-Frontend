import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// @aos
import AOS from "aos";
import "aos/dist/aos.css";

// @components
import Loading from "components/Loading/Loading";

// @page
const Landing = React.lazy(() => import("./pages/Landing/Landing"));

//------------------------------------------------------------------

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <RouterManage />
    </Suspense>
  );
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
