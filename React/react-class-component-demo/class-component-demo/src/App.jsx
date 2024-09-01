import './App.css';
import ToDoList from './components/ToDoList';

const todos = [
    { title: 'clean', done: false, id: 1 },
    { title: 'cook', done: false, id: 2 },
    { title: 'fitness', done: false, id: 3 },
    { title: 'study', done: false, id: 4 },
];

function App() {
    return <ToDoList todos={todos} />;
}

export default App;
