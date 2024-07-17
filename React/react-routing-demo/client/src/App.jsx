import Catalog from './components/catalog/Catalog';
import Create from './components/create/Create';
import Details from './components/details/Details';
import Edit from './components/edit/Edit';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { Routes, Route } from 'react-router-dom';

import './index.css';

function App() {
    return (
        <>
            <div id="box">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/create" element={<Create />}></Route>
                    <Route path="/edit" element={<Edit />}></Route>
                    <Route path="/details" element={<Details />}></Route>
                    <Route path="/catalog" element={<Catalog />}></Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
