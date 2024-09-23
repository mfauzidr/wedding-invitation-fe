// router.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

interface Username {
  username: string
}

const AppRouter = ({ username }: Username) => {
  return (
    <Router>
      <Routes>
        <Route path={`/`} element={<Home username={username} />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
