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
import WeddingGift from './pages/WeddingGift';

const username = 'User';


const router = createBrowserRouter([
  {
    path: `/`,
    element: <Home username={username} />,
    children: [
      { path: "invitation", element: <Invitation username={username} /> },
      { path: "countdown", element: <Countdown /> },
      { path: "bridegroom", element: <BrideGroom /> },
      { path: "wedding-info", element: <WeddingInfo /> },
      { path: "love-story", element: <LoveStory /> },
      { path: "gallery", element: <Gallery /> },
      { path: "rsvp", element: <Rsvp /> },
      { path: "wedding-gift", element: <WeddingGift /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router={router} />
  </>

);