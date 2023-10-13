import {createBrowserRouter,RouterProvider}from 'react-router-dom';

 import HomePage from './pages/Home';
import RootLayout from './pages/Root';

import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

import './App.css'
import Dresses from './pages/Dresses';
import Tshirts from './pages/Tshirts';
import Shirts from './pages/Shirts';
import Pants from './pages/Pants';
import Shorts from './pages/Shorts';

import Footer from "./components/Footer";

import NavBar from './components/NavBar/NavBar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/dresses", element: <Dresses /> },
      { path: "/shirts", element: <Shirts /> },
      { path: "/shorts", element: <Shorts /> },
      { path: "/tshirts", element: <Tshirts /> },
      { path: "/pants", element: <Pants /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignupPage /> },
     
    ],
  },
]);
function App() {

  return (
    <div>
     
      <RouterProvider router={router} />
    
      <Footer />
    </div>
  );
  
}

export default App
