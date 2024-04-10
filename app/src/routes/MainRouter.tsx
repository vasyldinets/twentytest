import { HashRouter, Route, Routes } from 'react-router-dom';
import ProductList from '../components/ProductList';

const MainRouter = (): JSX.Element => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<ProductList />}/>
            </Routes>
        </HashRouter>
    )
}

export default MainRouter;
