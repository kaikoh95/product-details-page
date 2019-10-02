import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import ProductPage from './components/ProductPage';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <NavBar/>
                    <Switch>
                        <Route exact path="/" component={ProductPage}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
  }
}

export default App;