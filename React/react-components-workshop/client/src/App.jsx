import './styles.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import UserSection from './user-section/UserSection';

function App() {
    return (
        <>
            <Header />
            <main className="main">
                <UserSection />
            </main>
            <Footer />
        </>
    );
}

export default App;
