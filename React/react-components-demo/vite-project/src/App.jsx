import Player from './components/Player';
import BookList from './components/BookList';
import './App.css';

function App() {
  const user = {
    nickname: 'Player 1',
    hp: 100,
    armor: 100,
  };

  return (
    <>
      <h1>Parent Component</h1>
      <Player user={user} title="Users in-game" />
      
    </>
  );
}

export default App;
