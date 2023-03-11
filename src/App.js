import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../src/pages/Main/Main'
import RootLayout from './components/layouts/RootLaytout';
import Signup  from './pages/Auth/Signup';
import Signin from './pages/Auth/Signin';
import AuthLayout from './components/layouts/AuthLayout';
import Confirm from './pages/Auth/Confirm';
import Mentorship from './pages/Mentorship/Mentorship';
import Trainings from './pages/Trainings/Trainings';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Main /> },
      { path: 'mentorship', element: <Mentorship /> },
      { path: 'trainings', element: <Trainings /> },
    ]
  },
  {
    path: '/',
    element: <AuthLayout />, 
    children: [
      { path: 'signin', element: <Signin /> },
      { path: 'signup', element: <Signup /> },
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
