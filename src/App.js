import React from 'react';
import './App.css';
import Homepage from './scenes/Homepage'
function App() {
    let ownerName = "Anna";
    let divHomeStyle = {
        backgroundColor: `green`,
        height: "800px",
        width: "100%"
    };
    return (
        <div className="App">
            <style>
                @import url('https://fonts.googleapis.com/css?family=Indie+Flower&display=swap');
            </style>
            <header className="App-header">
                <div className="container">
                    <div style={divHomeStyle} className="">
                        <Homepage ownerName={ownerName} />
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
