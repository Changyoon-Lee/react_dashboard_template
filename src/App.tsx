import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";

const Home = lazy(() => import("./routes/Home"));
function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route
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
