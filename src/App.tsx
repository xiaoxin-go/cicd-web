import React from 'react';
import './App.css';
import router from "./routers";
import {RouterProvider} from "react-router-dom";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
