import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import LupaPassword from './components/LupaPassword';

import Dashboard from './components/Dashboard';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path : "/register",
    element : <Register/>,
  },
  {
    path : '/lupapassword',
    element : <LupaPassword />,
  },
  {
    path : '/dashboard',
    element : <Dashboard />
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
