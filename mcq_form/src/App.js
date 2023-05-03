import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Quiz from "./Quiz.js"
import Result from "./Result.js"
import './App.css';

const router=createBrowserRouter([
  {
    path: '/',
    element : <Quiz></Quiz>
  },
  {
    path: '/result',
    element : <Result></Result>
  }
])

function App() {
  return (
    <main>
      <RouterProvider router={router} ></RouterProvider>
    </main>
  );
}

export default App;
