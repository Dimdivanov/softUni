import Catalog from './components/catalog/Catalog';
import Create from './components/create/Create';
import Details from './components/details/Details';
import Edit from './components/edit/Edit';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';

import './index.css';

function App() {
    return (
        <>
            <div id="box">
                <Header />
                <Home />
                <Login />
                <Register />
                <Create />
                <Edit />
                <Details />
                <Catalog />
            </div>
        </>
    );
}

export default App;
