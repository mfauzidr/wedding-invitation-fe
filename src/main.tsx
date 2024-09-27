import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '../tailwind.css';

import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: `:username`,
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router={router} />
  </>

);