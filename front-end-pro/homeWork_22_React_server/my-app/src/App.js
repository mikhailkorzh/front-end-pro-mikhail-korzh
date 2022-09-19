import './App.css';
import React from 'react';
import CardsReader from './components/CardsReader'
import {BrowserRouter, Route, Routes,} from 'react-router-dom';

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<CardsReader someData='String'/>}/>
                        )}/>
                    </Routes>
                </BrowserRouter>
            </header>
        </div>
    )

}

export default App;
