import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: '#aaa',
            padding: '10px',
            borderBottom: '1px #cfc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    render() {
        const { id,title } = this.props.todo; 
        return (
            <div style = {this.getStyle()}>
                <p>
                     <input type = "checkbox" onChange={ this.props.markComplete.bind(this, id) }/>
                    { title } 
                    <button onClick = {this.props.markDelete.bind(this,id)} style = {btnStyle}>X</button>
                </p>
            </div>
        )
    }
}

const btnStyle = {
    background: '#f44',
    color: 'fff',
    border: 'none',
    padding: '7px',
    borderRadius: '100%',
    cursor: 'pointer',
    float: 'right'
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    markDelete: PropTypes.func.isRequired
}

export default TodoItem