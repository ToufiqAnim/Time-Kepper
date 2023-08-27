import React from 'react';

import Discount from '../SpecialWatch/Discount';
import SpecialWatches from '../SpecialWatches/SpecialWatches';
import Watches from '../Watches/Watches';
import Header from '../../Components/Header/Header';
import Navigation from '../../Components/Shared/Navigation/Navigation';

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Header></Header>
      <Watches></Watches>
      <SpecialWatches></SpecialWatches>
      <Discount></Discount>
    </div>
  );
};

export default Home;
