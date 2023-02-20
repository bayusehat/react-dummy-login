import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import LupaPassword from './components/LupaPassword';
import Dashboard from './components/Dashboard';
import GantiPassword from './components/GantiPassword';

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
  },
  {
    path : '/changepassword/:userId',
    element : <GantiPassword />
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
