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
            </div>
        </>
    );
}

export default App;
