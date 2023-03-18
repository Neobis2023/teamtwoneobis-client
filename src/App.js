import './index.css';
import { createBrowserRouter, RouterProvider, useParams } from 'react-router-dom';
import Main from '../src/pages/Main/Main'
import RootLayout from './components/layouts/RootLaytout';
import Signup  from './pages/Auth/Signup';
import Signin from './pages/Auth/Signin';
import AuthLayout from './components/layouts/AuthLayout';
import Confirm from './pages/Auth/Confirm';
import Mentorship from './pages/Mentorship/Mentorship';
import Trainings from './pages/Trainings/Trainings';
import Forum from './pages/Forum/Forum';
import Videoblog from './pages/Videoblog/Videoblog';
import Admin from './pages/Admin/Admin';
import AdminLayout from './pages/Admin/layouts/AdminLayout';
import Statistics from './pages/Admin/Statistics/Statistics';
import { Edit, Feedback } from '@mui/icons-material';
import Applications from './pages/Admin/Applications/Applications';
import Users from './pages/Admin/Users/Users';



function App() {
  const { id } = useParams();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Main /> },
        { path: 'mentorship', element: <Mentorship /> },
        { path: 'trainings', element: <Trainings /> },
        { path: 'forum', element: <Forum /> },
        { path: 'videoblog/:id', element: <Videoblog /> },
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
    },
    { 
      path: 'admin', 
      element: <AdminLayout />,
      children: [
        { index: true, element: <Statistics /> },
        { path: 'edit', element: <Edit /> },
        { path: 'applications', element: <Applications /> },
        { path: 'users', element: <Users /> },
        { path: 'feedback', element: <Feedback /> },
      ]
    },
  ])

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
