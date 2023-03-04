import { BrowserRouter, Routes } from 'react-router-dom';

const Routing: React.FC = (): JSX.Element => (
  <BrowserRouter>
    <Routes>{/* <Routes path="/*" element={<App />}></Routes> */}</Routes>
  </BrowserRouter>
);
export default Routing;
