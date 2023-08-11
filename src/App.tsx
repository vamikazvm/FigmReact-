import 'reset-css'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Menu } from './components/pages/Menu';
import { Deals } from './components/pages/Deals';
import { Brands } from './components/pages/Brands';
import { Rewards } from './components/pages/Rewards';
import { NavBar } from './NavBar';
import { Footer } from './Footer';


export function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/rewards">
            <Rewards/>
          </Route>
          <Route path="/deals">
            <Deals/>
          </Route>
          <Route path="/brands">
            <Brands/>
          </Route>
        
        </Switch>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;

