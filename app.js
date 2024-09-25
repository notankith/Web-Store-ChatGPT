// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Import the Auth context
import Header from './components/Header'; // Import the Header component
import Footer from './components/Footer'; // Import the Footer component
import Home from './pages/index'; // Import the Home page
import ProductDetail from './pages/product/[id]'; // Import the Product detail page
import Cart from './pages/cart'; // Import the Cart page
import Checkout from './pages/checkout'; // Import the Checkout page
import './styles/global.css'; // Global styles
import './styles/tailwind.css'; // Tailwind CSS styles

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <main className="container mx-auto">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/product/:id" component={ProductDetail} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
