import React from 'react';
import Nav from './Nav';
import About from './About';
import Project from './Project';
import {  } from 'react-router-dom';

function Home() {
    return (
        <div>
            <Nav />
            <h1>Homepage</h1>
            <About />
            <Project />
        </div>
    )
}

export default Home;