import { BrowserRouter, Route, Routes, Link, useParams, useLocation } from 'react-router-dom';
import Home from '../page/Home';


export const Rotas = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />       
            </Routes>
        </BrowserRouter>
    );
};

export default Rotas