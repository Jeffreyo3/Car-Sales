import { ADD_FEATURE, REMOVE_ADDED_FEATURE } from '../actions';

export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FEATURE:
            console.log(state);
            return {
                // spread state
                ...state,
                // set additionalPrice by adding current state price w/the action price
                additionalPrice: state.additionalPrice + action.payload.price,
                // set car features by spreading current car state, and adding the feature added via action
                car: {...state.car, features: [...state.car.features, action.payload]},
                // filter additionalFeatures so it no longer displays the selected feature
                additionalFeatures: state.additionalFeatures.filter(feature => feature.id !== action.payload.id)
            };

        case REMOVE_ADDED_FEATURE:
            return {
                // spread state
                ...state,
                // set additionalPrice by subtracting the action price from the current state price
                additionalPrice: state.additionalPrice - action.payload.price,
                // set car features by spreading current car state, and removing the feature selected via action
                car: {...state. car, features: state.car.features.filter(feature => feature.id !== action.payload.id)},
                // set additionalFeatures by displaying features that were removed but previously added to car before purchase
                additionalFeatures: [...state.additionalFeatures, action.payload]
            };

        default:
            return state;
    }
};