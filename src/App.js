import React from 'react';
import SearchBar from './components/SearchBar';
import CardList from './components/CardList';
import { Container } from '@material-ui/core';

function App() {
    return (
        <div className="App">
            <SearchBar />
            <Container style={{ paddingTop: "20px"}}>
                <CardList />
            </Container>
        </div>
    );
}

export default App;
