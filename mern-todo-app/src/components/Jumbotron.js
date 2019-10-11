import React from 'react'
import {Jumbotron as Jumbo} from 'react-bootstrap';

export const Jumbotron = () => (
    <div>
        <Jumbo fluid className='jumbo'>
            <div className="overlay"></div>
            <h1>Todo App</h1>
            <p>Keep track of all your tasks</p>
        </Jumbo>

    </div>
)