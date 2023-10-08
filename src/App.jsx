import {createBrowserRouter,RouterProvider}from 'react-router-dom';

 import HomePage from './pages/Home';
import RootLayout from './pages/Root';


import './App.css'
import Dresses from './pages/Dresses';
import Tshirts from './pages/Tshirts';
import Shirts from './pages/Shirts';
import Pants from './pages/Pants';
import Shorts from './pages/Shorts';

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
    ],
  },
]);
function App() {

  return <RouterProvider router={router}/>
  
}

export default App
