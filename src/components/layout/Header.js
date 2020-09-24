import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header style = {headerStyle}>
            <h1>To Do List</h1>
            <Link style = {linkStyle} to= "/">Home</Link> | <Link style = {linkStyle} to = "/about">About</Link>
        </header>
    )
}

const headerStyle = {
    color: '#aaa',
    background: '#000',
    padding: '10px',
    textAlign: 'center'
}
const linkStyle = {
    color: '#999'
}
