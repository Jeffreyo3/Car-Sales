import React from 'react';
import { useDispatch } from 'react-redux';
import { addFeature } from '../actions';

const AdditionalFeature = props => {

  const dispatch = useDispatch();

  const handleAddFeature = (e) => {
    e.preventDefault();
    dispatch(addFeature(props.feature));
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

export default AdditionalFeature;