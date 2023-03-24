import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../src/pages/Main/Main'
import RootLayout from './components/layouts/RootLaytout';
import Signup  from './pages/Auth/Signup';
import Signin from './pages/Auth/Signin';
import AuthLayout from './components/layouts/AuthLayout';
import Confirm from './pages/Auth/Confirm';
import Mentorship from './pages/Mentorship/Mentorship';
import Trainings from './pages/Trainings/Trainings'
import Forum from './pages/Forum/Forum';
import Videoblog from './pages/Videoblog/Videoblog';
import AdminLayout from './pages/Admin/layouts/AdminLayout';
import Statistics from './pages/Admin/Statistics/Statistics';
import { Edit, Feedback } from '@mui/icons-material';
import Users from './pages/Admin/Users/Users';
import ApplicationsLayout from './pages/Admin/layouts/ApplicationsLayout';
import MentoringProgramLayout from './pages/Admin/layouts/MentoringProgramLayout';
import MentoringProgramSub from './pages/Admin/Applications/pages/subpages/MentoringProgramSub';
import TrainingsSub from './pages/Admin/Applications/pages/subpages/TrainingsSub';
import TrainingsLayout from './pages/Admin/layouts/TrainingsLayout';
import ForumsLayout from './pages/Admin/layouts/ForumsLayout';
import ForumsSub from './pages/Admin/Applications/pages/subpages/ForumsSub';




function App() {

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
        { index: true, path: 'statistics', element: <Statistics /> },
        { path: 'edit', element: <Edit /> },
        { path: 'users', element: <Users /> },
        { path: 'feedback', element: <Feedback /> },
        { path: 'applications', 
          element: <ApplicationsLayout />,
          children: [
            {
              path: 'forums', 
              element: <ForumsLayout />,
              children: [
                { path: 'менторство', element: <ForumsSub /> },
                { path: 'как-работает-наша-система', element: <ForumsSub /> },
                { path: 'кухня', element: <ForumsSub /> },
              ]
            
            },
            {
              path: 'mentoring-program', 
              element: <MentoringProgramLayout />, // <AdminMentoringProgram />
              children: [
                { path: 'поток-1', element: <MentoringProgramSub /> },
                { path: 'поток-2', element: <MentoringProgramSub /> },
                { path: 'поток-3', element: <MentoringProgramSub /> },
              ]
            },
            {
              path: 'trainings', 
              element: <TrainingsLayout />, // <AdminTrainings />
              children: [
                { index: true, path: 'образование', element: <TrainingsSub /> },
                { path: 'финансы', element: <TrainingsSub /> },
                { path: 'кухня', element: <TrainingsSub /> },
              ]
            },
          ] 
        },
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
