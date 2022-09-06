import './App.css';
import React from 'react';
import {Timer} from './components/Timer';
import {GreetingKitty} from './components/GreetingKitty';
import CardsReader from './components/CardsReader'
import {BrowserRouter, Route, Routes,} from 'react-router-dom';

const comment = {
    date: new Date(),
    author: {
        greeting: 'Hello Kitty',
        avatarUrl: 'https://placekitten.com/g/200/300',
        avatarName: 'Kitty'
    }
}

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={
                            <GreetingKitty
                                author={comment.author}
                            />}/>
                        <Route path='timer' element={<Timer someData='String'/>}/>
                        <Route path='cards' element={<CardsReader someData='String'/>}/>
                        )}/>
                    </Routes>
                </BrowserRouter>
            </header>
        </div>
    )

}

export default App;
