import React from 'react';
import { connect } from 'react-redux';
import { removeAddedFeature } from '../actions';
 
const AddedFeature = props => {

  const handleRemoveFeature = () => {
    props.removeAddedFeature(props.feature);
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button 
      className="button"
      onClick={handleRemoveFeature}
      >X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {

  };
};

export default connect(null, { removeAddedFeature })(AddedFeature);
// export default AddedFeature;
