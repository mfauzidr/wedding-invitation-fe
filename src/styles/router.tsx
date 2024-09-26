// router.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';



const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={`:username`} element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
