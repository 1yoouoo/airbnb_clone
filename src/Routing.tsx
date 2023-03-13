import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home';

const Routing: React.FC = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<Home />}></Route>
    </Routes>
  </BrowserRouter>
);
export default Routing;
