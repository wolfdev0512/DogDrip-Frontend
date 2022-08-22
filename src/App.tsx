import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// @aos
import AOS from "aos";
import "aos/dist/aos.css";

// @components
import Loading from "components/Loading/Loading";

//web3 context provider
import { Web3ReactProvider } from "@web3-react/core";
import getLibrary from "connectors/getLibrary";

// @toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    <Web3ReactProvider getLibrary={getLibrary}>
      <Suspense fallback={<Loading />}>
        <RouterManage />
        <ToastContainer />
      </Suspense>
    </Web3ReactProvider>
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
