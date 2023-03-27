import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

function Home() {
    return (
        <div>
            <Header />
            <Sidebar />
            <h1>Welcome to the home page!</h1>
        </div>
    );
}

export default Home;