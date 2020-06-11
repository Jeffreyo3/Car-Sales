import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { useSelector } from 'react-redux';

const AdditionalFeatures = () => {

  const upgrades = useSelector(state => state.additionalFeatures)

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {upgrades.length ? (
        <ol type="1">
          {upgrades.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
          <p>Nice looking car!</p>
        )}
    </div>
  );
};

export default AdditionalFeatures;