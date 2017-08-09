import * as React from 'react';
import Click from '../../containers/Click';
import CurrentClickList from '../../containers/CurrentClickList';
import Header from './Header.tsx';
import Footer from './Footer.tsx';


export const ClickPage = () => (
  <div className="background">
    <Header />
    <p className="text">"It's really simple, you just have to click as fast as you can."</p>
    <p className="text">-anonymous</p>
    <div className="results">
      <p>Enter your team name:</p>
    <Click />
    <CurrentClickList />
     <p className="text">Want to be top? STFU and click!</p>
    </div>
    <Footer />
  </div>
);
