import React from 'react';

class ToDoListItem extends React.Component {
    render() {
        return (
            <>
                <li>{this.props.title}</li>
            </>
        );
    }
}

export default ToDoListItem;
