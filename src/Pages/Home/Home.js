import React from 'react';

import Navigation from '../Shared/Navigation/Navigation';
import SpecialWatches from '../SpecialWatches/SpecialWatches';
import Watches from '../Watches/Watches';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
          <Navigation></Navigation>
          <Header></Header>
          <Watches></Watches>
          <SpecialWatches></SpecialWatches>
        </div>
    );
};

export default Home;