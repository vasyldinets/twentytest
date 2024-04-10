import { HashRouter, Route, Routes } from 'react-router-dom';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';

const MainRouter = (): JSX.Element => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/create" element={<ProductForm/>}/>
        <Route path="/edit/:id" element={<ProductForm/>}/>
      </Routes>
    </HashRouter>
  );
};

export default MainRouter;
