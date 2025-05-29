import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Lists from '../pages/Lists';
import ListGames from '../pages/ListGames';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lists" element={<Lists />} />
      <Route path="/lists/:listId/games" element={<ListGames />} />
    </Routes>
  );
}