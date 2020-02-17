import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import CardList from './components/CardList';
import { Container } from '@material-ui/core';
import CardListProvider from './state/providers/CardListProvider';

class App extends Component {
    render = () => {
  
      return (
        <div className="App">
            <SearchBar />
            <Container style={{ paddingTop: "20px"}}>
                <CardListProvider>
                    <CardList />
                </CardListProvider>
            </Container>
        </div>
    );
  }
}

export default App;