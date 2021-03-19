import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/page/Home';
import Products from './components/page/Products';
import Shop from './components/page/Shop';
import Support from './components/page/Support';
import SignUp from './components/page/SignUp';
import Marketing from './components/page/Marketing';
import Consulting from './components/page/Consulting';
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';




function App() {
    return ( 
        <Router>
            <Navbar />
            <Switch>
            <Route path='/' exact component={Home} />
                <Route path='/products'  component={Products} />
                <Route path='/shop'  component={Shop} />
                <Route path='/support'  component={Support} />
                <Route path='/sign'  component={SignUp} />
                <Route path='/marketing'  component={Marketing} />
                <Route path='/consulting'  component={Consulting} />

            </Switch>
        </Router>
    );
}

export default App;