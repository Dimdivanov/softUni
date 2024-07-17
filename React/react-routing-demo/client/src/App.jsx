import Header from './components/Header';
import Home from './components/Home';
import Login from './components/login/Login';
import './index.css';

function App() {
    return (
        <>
            <div id="box">
                <Header />
                <Home />
                <Login />
            </div>
        </>
    );
}

export default App;
