import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '../tailwind.css';

import Home from './pages/Home';
import Countdown from './pages/Countdown';
import Invitation from './pages/Invitation';
import BrideGroom from './pages/BrideGroom';
import WeddingInfo from './pages/WeddingInfo';
import LoveStory from './pages/LoveStory';
import Gallery from './pages/Gallery';
import Rsvp from './pages/Rsvp';


const router = createBrowserRouter([
  {
    path: `:username`,
    element: <Home />,
    children: [
      { path: "invitation", element: <Invitation /> },
      { path: "countdown", element: <Countdown /> },
      { path: "bridegroom", element: <BrideGroom /> },
      { path: "wedding-info", element: <WeddingInfo /> },
      { path: "love-story", element: <LoveStory /> },
      { path: "gallery", element: <Gallery /> },
      { path: "rsvp", element: <Rsvp /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router={router} />
  </>

);