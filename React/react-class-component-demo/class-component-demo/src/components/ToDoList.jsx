import React from 'react';
import ToDoListItem from './ToDoListItem';

class ToDoList extends React.Component {
    // creating state
    constructor(props) {
        super(props);

        this.state = {
            todos: props.todos,
        };
    }
    render() {
        console.log(this.props.todos);
        return (
            <>
                <h1>Class Component Demo</h1>
                <ul>
                    {this.state.todos.map((todo) => (
                        <ToDoListItem key={todo.id} {...todo} />
                    ))}
                </ul>
            </>
        );
    }
}

export default ToDoList;

/*
1.initialize component (creating the constructor)
2.render
3.vDOM
4.DOM - mounting
*/
