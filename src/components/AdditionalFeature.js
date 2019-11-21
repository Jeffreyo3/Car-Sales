import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from '../actions';

const AdditionalFeature = props => {

const handleAddFeature = () => {
  props.addFeature(props.feature);
}

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button 
      className="button"
      onClick={handleAddFeature}
      >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


const mapStateToProps = state => {
  return {
    
  };
};

export default connect(null, {addFeature})(AdditionalFeature);