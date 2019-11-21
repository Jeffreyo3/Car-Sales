import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

// import { connect } from 'react-redux';
// import { removeAddedFeature, addFeature } from './actions';

const App = (props) => {
  
  // const removeFeature = item => {
  //   // dispatch an action here to remove an item
  //   removeAddedFeature(item);
  // };

  // const buyItem = item => {
  //   // dipsatch an action here to add an item
  //   addFeature(item);
  // };

  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures />
        <Total />
      </div>
    </div>
  );
};

// const mapStateToProps = state => {
//   return {
//     car: state.car,
//     additionalPrice: state.additionalPrice,
//     additionalFeatures: state.additionalFeatures
//   }
// }

// export default connect(mapStateToProps, { } )(App);
export default App;
