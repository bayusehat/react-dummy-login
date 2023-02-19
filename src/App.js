import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import LupaPassword from './components/LupaPassword';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
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
