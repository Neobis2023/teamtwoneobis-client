import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './pages/Landing';
import RootLayout from './components/layouts/RootLaytout';
import Signup  from './pages/Signup';
import Signin from './pages/Signin';
import AuthLayout from './components/layouts/AuthLayout';
import Confirm from './pages/Confirm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Landing /> }
    ]
  },
  {
    path: '/',
    element: <AuthLayout />, 
    children: [
      { path: 'signup', element: <Signup /> },
      { path: 'signin', element: <Signin /> },
      { path: 'signup/confirm', element: <Confirm /> },
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
