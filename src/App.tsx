import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// dark mode 설정 관련, 이게 App 안에 있어야 하나..?
const renderLoader = () => <p>Loading...</p>;
const Home = lazy(() => import("./routes/Home"));
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={renderLoader()}>
        <Routes>
          <Route // route to Home page
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          ></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
