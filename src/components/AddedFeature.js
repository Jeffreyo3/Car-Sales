import React from 'react';
import { useDispatch } from 'react-redux';
// import { connect } from 'react-redux';
import { removeAddedFeature } from '../actions';

const AddedFeature = props => {
  const dispatch = useDispatch();

  return (
    <li>
      <button
        className="button"
        onClick={() => dispatch(removeAddedFeature(props.feature))}
      >X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
