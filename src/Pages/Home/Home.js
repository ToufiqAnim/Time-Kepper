import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import Watches from '../Watches/Watches';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
          <Navigation></Navigation>
          <Header></Header>
          <Watches></Watches>
          
        </div>
    );
};

export default Home;