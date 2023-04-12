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
import Users from './pages/Admin/Users/Users';
import ApplicationsLayout from './pages/Admin/layouts/ApplicationsLayout';
import MentoringProgramLayout from './pages/Admin/layouts/MentoringProgramLayout';
import MentoringProgramSub from './pages/Admin/Applications/pages/subpages/MentoringProgramSub';
import TrainingsSub from './pages/Admin/Applications/pages/subpages/TrainingsSub';
import TrainingsLayout from './pages/Admin/layouts/TrainingsLayout';
import ForumsLayout from './pages/Admin/layouts/ForumsLayout';
import ForumsSub from './pages/Admin/Applications/pages/subpages/ForumsSub';
import FeedbackLayout from './pages/Admin/layouts/FeedbackLayout';
import AllMessages from './pages/Admin/Feedback/subpages/AllMessages';
import ReadMessages from './pages/Admin/Feedback/subpages/ReadMessages';
import FavoriteMessages from './pages/Admin/Feedback/subpages/FavoriteMessages';
import EditLayout from './pages/Admin/layouts/EditLayout';
import List from './pages/Admin/Edit/components/Videoblog/subpages/List';
import ListLayout from './pages/Admin/layouts/ListLayout';
import Categories from './pages/Admin/Edit/components/Videoblog/subpages/Categories';
import AddVideo from './pages/Admin/Edit/components/Videoblog/subpages/AddVideo';
import AddCategory from './pages/Admin/Edit/components/Videoblog/subpages/AddCategory';
import AdminMentoringProgram from './pages/Admin/Edit/components/MentoringProgram/AdminMentoringProgram';
import AdminContent from './pages/Admin/Edit/components/Content/AdminContent';
import ApplyForm from './modules/ApplyForm/ApplyForm';
import User from './pages/User/User';
import ResetPassword from './pages/Auth/ResetPassword';
import WithAuth from './hoc/WithAuth';
import EditTrainingsLayout from './pages/Admin/layouts/EditTrainingsLayout';
import FutureTrainings from './pages/Admin/Edit/components/Trainings/pages/FutureTrainings';
import AddQuestionnaire from './pages/Admin/Edit/components/Trainings/pages/AddQuestionnaire';



function App() {
  const router = createBrowserRouter([
    {path: '*', element: <h1>Not found</h1>},
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Main /> },
        { path: 'mentorship', element: <Mentorship /> },
        { path: 'videoblog/:id', element: <Videoblog /> },
        { path: 'trainings', element: <Trainings /> },
        { path: 'trainings/:training/apply', element: <WithAuth>
        <ApplyForm />
      </WithAuth> },
        { path: 'forum', element: <Forum /> },
        { path: 'forum/:forum/apply', element: <WithAuth>
          <ApplyForm />
        </WithAuth>}, 
        { path: 'profile/:userId', element: <WithAuth>
          <User />
        </WithAuth> },
      ]
    },
    {
      path: '/',
      element: <AuthLayout />, 
      children: [
        { path: 'signin', element: <Signin /> },
        { path: 'signup', element: <Signup /> },
        { path: 'signup/confirm', element: <Confirm /> },
        { path: 'reset-password', element: <ResetPassword /> },
      ]
    },
    { 
      path: 'admin', 
      element: <AdminLayout />,
      children: [
        { index: true, path: 'statistics', element: <Statistics /> },
        { path: 'edit', 
        element: <EditLayout />,
        children: [
          { path: 'videoblog', 
          element: <ListLayout />,
          children: [
            { path: 'list', element: <List /> },
            { path: 'categories', element: <Categories /> },
            { path: 'tests', element: <></> },
            { path: 'add-video', element: <AddVideo /> },
            { path: 'add-category', element: <AddCategory /> },

          ],
        },
        { path: 'content', element: <AdminContent /> },
        { path: 'mentoring-program', element: <AdminMentoringProgram /> },
        { path: 'trainings', element: <EditTrainingsLayout/>, children: [
          { path: 'future-trainings', element: <FutureTrainings/> },
          { path: 'future-trainings/:id/add-questionnaire', element: <AddQuestionnaire/> },
        ] },
        { path: 'forums', element: <></> },
        { path: 'achievements', element: <></> },
        ]
        },
        { path: 'users', element: <Users /> },
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
        { 
          path: 'feedback', 
          element: <FeedbackLayout />,  // <Feedback />
          children: [
            { path: 'all', element: <AllMessages /> },
            { path: 'read', element: <ReadMessages /> },
            { path: 'favorites', element: <FavoriteMessages /> },
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
